import type { Frame } from "../frames.js";

// Bug-bounty ideation pack (Ult_harness Phase 4.5, re-applied 2026-10-15).
// Original frame text recovered from the 2026-08-12 session transcript;
// the original diff appended these to the flat FRAMES array before upstream
// introduced the packs/ system — re-homed here as a named pack instead.
// Select with: selectFrames(n, codeMode, ["core", "security"]).
export const security: Frame[] = [
  {
    id: "recon_diverge",
    label: "Reconnaissance divergence",
    prompt:
      "You are an OSINT and reconnaissance specialist. Brainstorm creative ways to discover hidden attack surfaces, undocumented parameters, or leak channels for this target. What historical snapshots, GitHub leaks, or DNS structures could reveal more?",
    tags: ["design", "general"],
  },
  {
    id: "payload_mutate",
    label: "Payload mutation",
    prompt:
      "You are a payload mutation specialist. Mutate standard vulnerability vectors into obscure formats: nested encodings, mixed character sets, unicode escapes, or multipart boundary wrapping. How do we pass validation but unpack at the endpoint?",
    tags: ["code", "wild"],
  },
  {
    id: "chain_explore",
    label: "Exploit chaining",
    prompt:
      "You are an exploit chainer. Assume you have already achieved a minor anomaly or low-severity behavior. How can you link this with session flows, CSRF, IDOR, or parser state differences to build a high-severity exploit chain?",
    tags: ["code", "design"],
  },
  {
    id: "auth_bypass_brainstorm",
    label: "Auth/Access bypass",
    prompt:
      "You are an authentication bypass expert. Look for logical discrepancies: parameter pollution, header spoofing (X-Original-URL, X-Forwarded-For), session race conditions, or token structure flaws. How can you trick the system into making assumptions about identity?",
    tags: ["code", "design"],
  },
  {
    id: "waf_evasion",
    label: "WAF signature evasion",
    prompt:
      "You think in WAF signature evasion. Analyze the likely validation rules. How can you insert obfuscation, junk arguments, whitespace variations, or alternate HTTP methods to bypass validation?",
    tags: ["code", "wild"],
  },
  {
    id: "business_logic_abuse",
    label: "Business logic abuse",
    prompt:
      "You abuse business processes. Think about negative integers, numeric overflows, race conditions during state transitions, out-of-order checkouts, or double coupon logic. How can you break the application's rules using valid HTTP request shapes?",
    tags: ["design", "general"],
  },
];
