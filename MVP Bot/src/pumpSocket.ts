import WebSocket from "ws";

export function connectPumpPortal(onNewToken: (data: any) => void) {
  const ws = new WebSocket("wss://pumpportal.fun/api/data");

  ws.on("open", function newTokens() {
    let payload = {
      method: "subscribeNewToken",
    };
    ws.send(JSON.stringify(payload));
  });

  ws.on("message", function tokens(data: WebSocket.RawData) {
    const parsed = JSON.parse(data.toString());
    if (parsed.txType === "create" && parsed.mint) {
      onNewToken(parsed);
    }
  });
}
