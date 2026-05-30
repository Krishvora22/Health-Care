// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 5_000;

function record(error: unknown) {
  console.error("[ErrorCapture] Recording error:", error);
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => {
    console.error("[ErrorCapture] Global error event caught");
    record((event as ErrorEvent).error ?? event);
  });
  globalThis.addEventListener("unhandledrejection", (event) => {
    console.error("[ErrorCapture] Unhandled rejection caught");
    record((event as PromiseRejectionEvent).reason);
  });
}

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) {
    console.error("[ErrorCapture] No error captured");
    return undefined;
  }
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    console.error("[ErrorCapture] Captured error expired (older than 5s)");
    lastCapturedError = undefined;
    return undefined;
  }
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}
