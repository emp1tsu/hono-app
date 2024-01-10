import { Hono } from "hono";
import {
  VerifyFirebaseAuthConfig,
  VerifyFirebaseAuthEnv,
  verifyFirebaseAuth,
} from "@hono/firebase-auth";

const firebaseConfig: VerifyFirebaseAuthConfig = {
  projectId: "hono-app-3513b",
  // firebaseEmulatorHost: "127.0.0.1:9099",
};
const app = new Hono<{ Bindings: VerifyFirebaseAuthEnv }>();

app.use("/test", verifyFirebaseAuth(firebaseConfig));
app.get("/test", (c) => c.text("Hi!"));

export default app;
