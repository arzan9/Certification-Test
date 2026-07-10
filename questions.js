/* Claude Certified Architect – Foundations (CCAR-F) practice bank
 * Grounded in the official Exam Guide v1.0 (July 2026).
 * answer = array of correct option indices. Length > 1 => multiple-response.
 * domain = 1..5 per the blueprint.
 */
const DOMAINS = {
  1: "Agentic Architecture & Orchestration",
  2: "Tool Design & MCP Integration",
  3: "Claude Code Configuration & Workflows",
  4: "Prompt Engineering & Structured Output",
  5: "Context Management & Reliability"
};

const DOMAIN_WEIGHT = { 1: 27, 2: 18, 3: 20, 4: 20, 5: 15 };

const PACKAGES = [
  {
    "id": "A",
    "name": "Package A — Core Foundations",
    "desc": "Balanced first sitting. Agentic loops, tool descriptions, decomposition, CI basics.",
    "questions": [
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Production data shows that in 12% of cases your agent skips get_customer entirely and calls lookup_order using only the customer's stated name, occasionally causing misidentified accounts and incorrect refunds. What change would most effectively address this reliability issue?",
        "o": [
          "Add few-shot examples showing the agent always calling get_customer first, even when customers volunteer order details.",
          "Enhance the system prompt to state that get_customer verification is mandatory before any order operations.",
          "Add a programmatic prerequisite that blocks lookup_order and process_refund until get_customer has returned a verified customer ID.",
          "Implement a routing classifier that enables only the subset of tools appropriate for each request type."
        ],
        "a": [
          2
        ],
        "e": "Critical business logic needing a fixed sequence requires programmatic enforcement for deterministic guarantees. B and C rely on probabilistic LLM compliance — insufficient when errors have financial consequences. D addresses tool availability, not tool ordering."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "You are implementing the agentic loop. Which condition should terminate the loop?",
        "o": [
          "A fixed iteration cap of 10 is reached.",
          "stop_reason is \"end_turn\".",
          "The assistant text contains a phrase like \"I'm done\".",
          "stop_reason is \"tool_use\"."
        ],
        "a": [
          1
        ],
        "e": "Continue while stop_reason is \"tool_use\"; terminate on \"end_turn\". Parsing natural-language signals or using an arbitrary iteration cap as the primary stop are anti-patterns."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Both get_customer and lookup_order have minimal descriptions (\"Retrieves customer information\" / \"Retrieves order details\") and accept similar identifier formats. The agent frequently picks the wrong one. What is the most effective FIRST step?",
        "o": [
          "Add 5-8 few-shot examples to the system prompt demonstrating correct tool selection.",
          "Implement a routing layer that parses input and pre-selects a tool by keyword.",
          "Consolidate both into one lookup_entity tool that decides the backend internally.",
          "Expand each tool's description with input formats, example queries, edge cases, and boundaries explaining when to use it versus similar tools."
        ],
        "a": [
          3
        ],
        "e": "Tool descriptions are the primary mechanism LLMs use for selection. Fixing descriptions is the low-effort, high-leverage root-cause fix. Few-shot adds token overhead without fixing the cause; routing is over-engineered; consolidation is a bigger change than a \"first step\" warrants."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You want a custom /review slash command that runs your team's checklist, available to every developer when they clone or pull the repo. Where should the command file live?",
        "o": [
          "In the CLAUDE.md file at the project root.",
          "In ~/.claude/commands/ in each developer's home directory.",
          "In .claude/commands/ in the project repository.",
          "In a .claude/config.json file with a commands array."
        ],
        "a": [
          2
        ],
        "e": "Project-scoped commands in .claude/commands/ are version-controlled and shared automatically. ~/.claude/commands/ is personal; CLAUDE.md holds context not command definitions; the config.json commands array does not exist."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "Your pipeline runs `claude \"Analyze this PR for security issues\"` but the job hangs waiting for interactive input. What is the correct fix?",
        "o": [
          "Add a --batch flag.",
          "Add the -p (or --print) flag.",
          "Set CLAUDE_HEADLESS=true before running.",
          "Redirect stdin from /dev/null."
        ],
        "a": [
          1
        ],
        "e": "-p / --print runs non-interactively: it processes the prompt, prints to stdout, and exits. The other options reference non-existent features or brittle workarounds."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "A coordinator must spawn subagents via the Task tool. Which statements are true? (Select 2)",
        "o": [
          "Subagents share memory across separate invocations by default.",
          "The coordinator's allowedTools must include \"Task\".",
          "Context a subagent needs must be provided explicitly in its prompt.",
          "Subagents automatically inherit the coordinator's full conversation history."
        ],
        "a": [
          1,
          2
        ],
        "e": "Task must be in allowedTools to spawn subagents, and subagents run with isolated context — parent context must be passed explicitly. They do not inherit history or share memory automatically."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You must guarantee schema-compliant structured output with no JSON syntax errors. What is the most reliable approach?",
        "o": [
          "Post-process free-text output with a regex JSON extractor.",
          "Use tool_use with a JSON schema and read structured data from the tool_use response.",
          "Lower temperature to 0 and hope for valid JSON.",
          "Ask the model in prose to 'return valid JSON only' and parse the text."
        ],
        "a": [
          1
        ],
        "e": "tool_use with a JSON schema is the most reliable path and eliminates syntax errors. Note it does not prevent semantic errors (e.g., line items not summing to the total)."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Across a long multi-turn case, summarization keeps dropping the exact refund amount and order dates. What is the best mitigation?",
        "o": [
          "Extract transactional facts (amounts, dates, order numbers, statuses) into a persistent 'case facts' block included in every prompt, outside the summarized history.",
          "Increase max_tokens so summaries can be longer.",
          "Re-send the entire raw transcript on every turn.",
          "Ask the model to 'remember all important numbers'."
        ],
        "a": [
          0
        ],
        "e": "Progressive summarization risks condensing precise values into vague text. Keeping a structured case-facts block outside the summarized history preserves the exact transactional details."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "An MCP tool call fails. Which error responses let the agent make appropriate recovery decisions? (Select 2)",
        "o": [
          "For a business-rule violation, retriable: false plus a customer-friendly explanation.",
          "Silently return an empty success result.",
          "Structured metadata with errorCategory (transient/validation/permission) and an isRetryable boolean.",
          "A uniform 'Operation failed' string for all failures."
        ],
        "a": [
          0,
          2
        ],
        "e": "Structured error metadata (category + isRetryable) and clear non-retryable business errors let the agent recover or explain correctly. Uniform generic errors and silent suppression both hide the context needed to act."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You must restructure a monolith into microservices — changes across dozens of files plus decisions about service boundaries. Which approach fits best?",
        "o": [
          "Enter plan mode to explore the codebase and design an approach before making changes.",
          "Start direct execution and let the implementation reveal service boundaries.",
          "Use direct execution with detailed upfront instructions for each service.",
          "Start in direct execution and switch to plan mode only if complexity appears."
        ],
        "a": [
          0
        ],
        "e": "Plan mode targets large-scale, multi-approach, architectural work — exactly this. Direct-execution options risk costly rework or assume the structure is already known; the complexity is stated up front, not emergent."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "A review prompt says 'check that comments are accurate' and produces many false positives that erode developer trust. What most improves precision?",
        "o": [
          "Use explicit criteria, e.g. 'flag a comment only when its claimed behavior contradicts the actual code behavior'.",
          "Ask the model to self-rate confidence and drop anything below 8/10.",
          "Increase the model's context window.",
          "Append 'be conservative and only report high-confidence findings'."
        ],
        "a": [
          0
        ],
        "e": "Specific categorical criteria beat vague instructions. General 'be conservative' or confidence-threshold instructions don't reliably raise precision; larger context is unrelated."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "The web search subagent times out mid-task. Which error-propagation approach best enables intelligent coordinator recovery?",
        "o": [
          "Catch the timeout and return an empty result set marked successful.",
          "Return structured error context: failure type, attempted query, partial results, and potential alternatives.",
          "Propagate the exception to a top-level handler that terminates the whole workflow.",
          "Retry with backoff internally, then return a generic 'search unavailable' after exhausting retries."
        ],
        "a": [
          1
        ],
        "e": "Structured error context lets the coordinator retry differently, try alternatives, or proceed with partial results. Generic statuses hide context, silent empty-success prevents recovery, and terminating everything is an anti-pattern."
      }
    ]
  },
  {
    "id": "B",
    "name": "Package B — Orchestration & Config Depth",
    "desc": "Heavier on multi-agent orchestration, Claude Code config hierarchy, and batch trade-offs.",
    "questions": [
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "On the topic 'impact of AI on creative industries' the final report covers only visual arts. The coordinator log shows it decomposed the topic into 'AI in digital art', 'AI in graphic design', and 'AI in photography'. Each subagent succeeded. Most likely root cause?",
        "o": [
          "The document analysis agent filters out non-visual sources.",
          "The coordinator's task decomposition is too narrow, so subagent assignments miss whole domains (music, writing, film).",
          "The synthesis agent lacks coverage-gap detection instructions.",
          "The web search agent's queries need to be broader."
        ],
        "a": [
          1
        ],
        "e": "The logs show the coordinator only assigned visual-arts subtopics; the subagents executed their assigned scope correctly. The other options blame downstream agents that worked as instructed."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A monolith-to-microservices task spans dozens of files with multiple valid designs. Which single approach is best?",
        "o": [
          "Direct execution, discovering boundaries as you go.",
          "Direct execution with exhaustive upfront instructions.",
          "Enter plan mode to explore dependencies and design before changing code.",
          "Direct execution, switching to plan mode only if needed."
        ],
        "a": [
          2
        ],
        "e": "Architectural, large-scale, multi-approach work is the canonical plan-mode case; it prevents costly late rework."
      },
      {
        "d": 5,
        "s": "Claude Code for Continuous Integration",
        "q": "Two workflows exist: (1) a blocking pre-merge check developers wait on, and (2) an overnight technical-debt report. Your manager wants both moved to the Message Batches API for 50% savings. Best evaluation?",
        "o": [
          "Keep real-time for both to avoid result-ordering issues.",
          "Use batch for the overnight reports only; keep real-time for the pre-merge check.",
          "Switch both to batch with status polling.",
          "Switch both to batch with a real-time timeout fallback."
        ],
        "a": [
          1
        ],
        "e": "Batch offers 50% savings but up to 24h processing and no latency SLA — unfit for blocking pre-merge checks, ideal for overnight jobs. custom_id handles correlation, so ordering isn't a real concern."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "You want subagents to run in parallel to cut latency. How does the coordinator achieve true parallel spawning?",
        "o": [
          "Set tool_choice: 'any' so tools run concurrently.",
          "Increase max_tokens so more tools fit in one turn.",
          "Emit one Task call per turn across several sequential turns.",
          "Emit multiple Task tool calls in a single coordinator response."
        ],
        "a": [
          3
        ],
        "e": "Parallel subagents come from multiple Task calls in one response. Separate turns are sequential; tool_choice and max_tokens don't control parallelism."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Your codebase has React components, API handlers, and DB models with different conventions, and test files (Button.test.tsx) are scattered next to their sources. You want conventions applied automatically by file path. Best mechanism?",
        "o": [
          "Put a separate CLAUDE.md in each subdirectory.",
          "Put every convention under headers in the root CLAUDE.md and rely on Claude to infer.",
          "Create a skill per code type holding the conventions in SKILL.md.",
          "Create .claude/rules/ files with YAML frontmatter glob patterns (e.g., paths: ['**/*.test.tsx'])."
        ],
        "a": [
          3
        ],
        "e": "Glob-scoped rules apply by file path regardless of directory — essential for scattered test files. Inference is unreliable, skills need invocation, and directory CLAUDE.md files can't span many directories."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "You have several extraction schemas and the incoming document type is unknown, but you must guarantee the model calls one of the extraction tools rather than replying with text. Which tool_choice setting?",
        "o": [
          "Omit tool_choice entirely.",
          "tool_choice: 'auto'.",
          "tool_choice: {type: 'tool', name: 'extract_metadata'}.",
          "tool_choice: 'any'."
        ],
        "a": [
          3
        ],
        "e": "'any' forces a tool call but lets the model pick which schema — right when the type is unknown. 'auto' may return text; forced selection pins one specific tool; omitting defaults to auto."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Source documents sometimes lack a field, and the model fabricates plausible values to satisfy the schema. Best schema design fix?",
        "o": [
          "Make those fields optional/nullable so the model can return null when the info is absent.",
          "Add a prose instruction 'do not hallucinate'.",
          "Mark all fields required so the model tries harder to find them.",
          "Retry the extraction until every field is populated."
        ],
        "a": [
          0
        ],
        "e": "Nullable/optional fields stop the model fabricating values to satisfy required fields. Required fields worsen it; prose alone is weak; retrying can't conjure absent information."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Company policy: no automated refund above $500. You need a guaranteed block, not best-effort. Which Agent SDK mechanism fits?",
        "o": [
          "A few-shot example showing the agent refusing a $600 refund.",
          "A tool-call interception hook that blocks process_refund over $500 and redirects to human escalation.",
          "Lowering temperature so the model follows the rule.",
          "A system-prompt line stating refunds over $500 are forbidden."
        ],
        "a": [
          1
        ],
        "e": "Guaranteed compliance needs programmatic interception (a hook), not probabilistic prompt guidance. Prompt/few-shot/temperature approaches have a non-zero failure rate."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Which situations are appropriate escalation triggers? (Select 3)",
        "o": [
          "The agent's self-reported confidence score dips slightly on an otherwise routine case.",
          "The agent cannot make meaningful progress.",
          "The customer explicitly asks for a human.",
          "The policy is silent or ambiguous on the customer's specific request."
        ],
        "a": [
          1,
          2,
          3
        ],
        "e": "Explicit human requests, policy gaps/ambiguity, and inability to progress are valid triggers. Self-reported confidence is a poorly calibrated proxy for real complexity."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Your team shares an MCP server that needs a GitHub token, and each dev also runs a personal experimental server. Which configuration is correct? (Select 2)",
        "o": [
          "Personal servers must live in .mcp.json to be discovered.",
          "Commit the raw GitHub token into .mcp.json so teammates get it.",
          "Put the shared server in project-scoped .mcp.json using ${GITHUB_TOKEN} expansion.",
          "Put the personal experimental server in user-scoped ~/.claude.json."
        ],
        "a": [
          2,
          3
        ],
        "e": "Shared tooling belongs in project .mcp.json with env-var expansion (no committed secrets); personal/experimental servers belong in user ~/.claude.json. Committing raw tokens leaks secrets."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Which statement about the Message Batches API is correct?",
        "o": [
          "It costs 50% more but is faster.",
          "It guarantees sub-minute latency.",
          "It does not support multi-turn tool calling within a single request.",
          "It requires a separate custom_id-free correlation service."
        ],
        "a": [
          2
        ],
        "e": "Batch can't execute tools mid-request and return results in one turn. It gives 50% savings, up to 24h with no SLA, and correlates via custom_id."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A new teammate reports that Claude ignores the team's coding standards that everyone else's Claude follows. You find those standards live in ~/.claude/CLAUDE.md on each senior dev's machine. What is the root cause and fix?",
        "o": [
          "The standards must be duplicated into every subdirectory's CLAUDE.md.",
          "The standards are user-level (not shared via version control); move them to project-level .claude/CLAUDE.md (or root CLAUDE.md) so every clone gets them.",
          "The teammate needs to run /compact to reload memory.",
          "User-level CLAUDE.md is automatically synced through the repo; the teammate's clone is just stale."
        ],
        "a": [
          1
        ],
        "e": "~/.claude/CLAUDE.md is user-scoped and never travels with the repo, so a new teammate won't receive it. Project-level config is the shared, version-controlled layer. Use /memory to verify which files are loaded."
      }
    ]
  },
  {
    "id": "C",
    "name": "Package C — Reliability & Escalation",
    "desc": "Escalation calibration, multi-pass review, provenance, and context degradation.",
    "questions": [
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Your agent hits 55% first-contact resolution vs an 80% target. Logs show it escalates easy cases (standard damage replacements with photos) yet tries to autonomously handle policy-exception cases. Best fix for escalation calibration?",
        "o": [
          "Add explicit escalation criteria to the system prompt with few-shot examples of when to escalate vs resolve.",
          "Have the agent self-report a 1-10 confidence score and route below a threshold.",
          "Train a separate classifier on historical tickets to predict escalation.",
          "Add sentiment analysis and escalate on negative sentiment."
        ],
        "a": [
          0
        ],
        "e": "The root cause is unclear decision boundaries; explicit criteria + few-shot fixes it proportionately. Self-reported confidence is miscalibrated (it's confident on hard cases), a classifier is over-engineered, and sentiment doesn't track complexity."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Test files sit next to their sources across many directories and must all follow one convention automatically. Most maintainable approach?",
        "o": [
          "Rule files in .claude/rules/ with YAML frontmatter glob patterns.",
          "A separate CLAUDE.md per subdirectory.",
          "One big root CLAUDE.md with per-area headers, relying on inference.",
          "A skill per code type with conventions in SKILL.md."
        ],
        "a": [
          0
        ],
        "e": "Glob-pattern rules apply by file type regardless of location; the alternatives rely on inference, manual invocation, or directory binding that can't span scattered files."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "The synthesis agent often needs simple fact checks (dates, names, stats) while combining findings. Today it hands control back to the coordinator, which calls web search, then re-invokes synthesis — adding 2-3 round trips and 40% latency. 85% of checks are simple, 15% need deeper investigation. Best fix?",
        "o": [
          "Have synthesis batch all verification needs and send them to the coordinator at the end.",
          "Have the web search agent pre-cache extra context around each source.",
          "Give the synthesis agent all web-search tools so it never round-trips.",
          "Give the synthesis agent a scoped verify_fact tool for simple lookups; keep complex verifications routed through the coordinator."
        ],
        "a": [
          3
        ],
        "e": "Least-privilege: a scoped verify_fact tool covers the 85% simple case while complex cases keep the existing pattern. Batching creates blocking dependencies, full tool access over-provisions, and speculative caching can't predict needs."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "A 14-file PR reviewed in one pass gives uneven depth, misses obvious bugs, and even flags a pattern in one file while approving identical code elsewhere. How should you restructure the review?",
        "o": [
          "Run three full-PR passes and only flag issues appearing in 2 of 3.",
          "Use a larger-context model to fit all 14 files at once.",
          "Force developers to submit PRs of 3-4 files.",
          "Split into per-file passes for local issues, then a separate cross-file integration pass."
        ],
        "a": [
          3
        ],
        "e": "The cause is attention dilution across many files. Per-file passes give consistent depth; an integration pass catches cross-file issues. Bigger context doesn't fix attention quality, and consensus voting suppresses real intermittent bugs."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Extraction validation fails. In which cases will a retry-with-error-feedback loop likely succeed vs fail? (Select 2)",
        "o": [
          "Succeed: format mismatches or structural output errors, with the specific validation error appended.",
          "Fail: the required information is simply absent from the source document.",
          "Succeed: the value exists only in an external document you never provided.",
          "Fail: the JSON had a trailing-comma syntax error."
        ],
        "a": [
          0,
          1
        ],
        "e": "Retries fix format/structural errors when you append the exact error. They can't succeed when the info is absent from the provided source. (Syntax errors are already eliminated by tool_use; missing external docs can't be recovered by retry.)"
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Two credible sources report different statistics for the same metric. How should synthesis handle this?",
        "o": [
          "Pick the value from the source that appears first.",
          "Preserve both values with source attribution and structure the report to separate well-established from contested findings.",
          "Average the two numbers into a single figure.",
          "Drop both because they conflict."
        ],
        "a": [
          1
        ],
        "e": "Conflicts should be annotated with source attribution, not silently resolved. Arbitrary selection, averaging, or dropping all destroy provenance and accuracy."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You need to reliably catch invoices whose line items don't add up to the stated total. Which self-correction design helps?",
        "o": [
          "Lower temperature so arithmetic is correct.",
          "Mark the total field required.",
          "Rely on the strict JSON schema to reject mismatched totals.",
          "Extract calculated_total alongside stated_total and flag discrepancies; add a conflict_detected boolean."
        ],
        "a": [
          3
        ],
        "e": "Strict schemas stop syntax errors but not semantic ones like non-summing totals. Emitting both totals plus a conflict flag surfaces the discrepancy for validation."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "During a long codebase exploration the agent starts giving inconsistent answers and cites 'typical patterns' instead of the specific classes it found earlier. Which techniques counteract this? (Select 2)",
        "o": [
          "Increase temperature to encourage creativity.",
          "Use /compact to reduce context filled with verbose discovery output.",
          "Disable subagents so everything stays in one context.",
          "Maintain scratchpad files recording key findings and reference them for later questions."
        ],
        "a": [
          1,
          3
        ],
        "e": "Scratchpad files persist findings across context boundaries, and /compact reduces bloated context. Higher temperature worsens consistency; subagent delegation actually helps isolate verbose output."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You're tracing all callers of a function across a large codebase. Which built-in tool sequence is most appropriate?",
        "o": [
          "Grep to find entry points and callers, then Read to follow imports and trace flows.",
          "Glob for content patterns like function names.",
          "Edit each file to add logging and infer callers from output.",
          "Read every file upfront, then reason over all of it."
        ],
        "a": [
          0
        ],
        "e": "Grep searches file contents (function names, callers); Read follows the traced flow incrementally. Reading everything upfront wastes context, Glob matches file paths not contents, and Edit-for-logging is inappropriate for discovery."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "A message raises three concerns at once: a wrong charge, a late shipment, and a password reset. What is the recommended handling pattern?",
        "o": [
          "Handle only the first concern and ask the customer to resend the others.",
          "Escalate immediately because multiple concerns exceed agent scope.",
          "Merge all three into a single generic apology.",
          "Decompose into distinct items, investigate each (in parallel where possible) using shared context, then synthesize one unified resolution."
        ],
        "a": [
          3
        ],
        "e": "Multi-concern requests should be decomposed into separate items, investigated with shared context, then synthesized into a unified reply."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "Your extraction pipeline reports 97% overall accuracy, so leadership wants to drop human review. What is the key risk and mitigation?",
        "o": [
          "Just raise the confidence threshold to 99% globally.",
          "97% is universally safe to automate; no further checks needed.",
          "Aggregate accuracy can mask poor performance on specific document types or fields; validate accuracy by segment and use stratified sampling before automating.",
          "Replace human review with a second identical model pass."
        ],
        "a": [
          2
        ],
        "e": "High aggregate numbers can hide weak segments. Analyze accuracy by document type and field and use stratified random sampling of high-confidence extractions before reducing human review."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A verbose codebase-analysis skill floods the main conversation with output. Which SKILL.md frontmatter option isolates it in a sub-agent context?",
        "o": [
          "output: quiet.",
          "argument-hint.",
          "context: fork.",
          "allowed-tools."
        ],
        "a": [
          2
        ],
        "e": "context: fork runs the skill in an isolated sub-agent context so its verbose output doesn't pollute the main session. allowed-tools restricts tools; argument-hint prompts for params; output: quiet isn't a real option."
      }
    ]
  },
  {
    "id": "D",
    "name": "Package D — Tooling & MCP Mastery",
    "desc": "Deeper Tool Design & MCP: overlap, tool count, resources, tool_choice, error taxonomy.",
    "questions": [
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Two tools, analyze_content and analyze_document, have near-identical descriptions and the agent misroutes between them. Besides rewriting descriptions, which change most directly removes the overlap?",
        "o": [
          "Merge them into one analyze() tool with a mode flag.",
          "Give both tools tool_choice: 'any'.",
          "Add both to more subagents so one is always available.",
          "Rename analyze_content to a purpose-specific name like extract_web_results with a web-specific description."
        ],
        "a": [
          3
        ],
        "e": "Renaming to a specific, non-overlapping purpose (extract_web_results) eliminates functional ambiguity. tool_choice doesn't disambiguate meaning, and merging just reintroduces overlap behind a flag."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "An agent has grown to 18 tools and tool selection has become unreliable. What principle explains this and what's the fix?",
        "o": [
          "Too many tools increases decision complexity; scope each agent to the 4-5 tools its role needs.",
          "Rename all tools with numeric suffixes to disambiguate.",
          "The fix is to set tool_choice: 'auto' so the model ignores irrelevant tools.",
          "More tools always help; the model just needs a bigger context window."
        ],
        "a": [
          0
        ],
        "e": "Excess tools (18 vs 4-5) degrade selection reliability. Restrict each agent to role-relevant tools, with limited cross-role tools for high-frequency needs."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "You want to expose a catalog of available issue summaries and doc hierarchies so agents don't burn turns on exploratory tool calls. Which MCP concept fits?",
        "o": [
          "A larger system prompt listing everything.",
          "MCP resources for exposing content catalogs.",
          "isError flags on each tool.",
          "MCP tools with tool_choice: 'any'."
        ],
        "a": [
          1
        ],
        "e": "MCP resources expose content catalogs (issue summaries, doc hierarchies, schemas) to give agents visibility without exploratory tool calls. Tools are for actions; resources are for content."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "You must ensure extract_metadata runs before any enrichment tool on the first turn. Which tool_choice configuration?",
        "o": [
          "tool_choice: 'auto'.",
          "Forced selection: tool_choice: {type: 'tool', name: 'extract_metadata'}, then process later steps in follow-up turns.",
          "tool_choice: 'any'.",
          "Omit tool_choice and rely on ordering in the prompt."
        ],
        "a": [
          1
        ],
        "e": "Forced tool selection guarantees a specific tool is called first. 'auto' may skip it, 'any' lets the model pick a different tool, and prompt ordering alone is probabilistic."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "The agent keeps preferring the built-in Grep over a more capable MCP search tool. Which fix best changes this behavior?",
        "o": [
          "Enhance the MCP tool's description to explain its capabilities and outputs in detail.",
          "Rename Grep to zzz_grep so it sorts last.",
          "Set tool_choice: 'any' on every turn.",
          "Delete the built-in Grep tool from the model."
        ],
        "a": [
          0
        ],
        "e": "Better MCP tool descriptions make the model prefer the more capable tool. Removing built-ins or renaming tricks are brittle; tool_choice doesn't express capability."
      },
      {
        "d": 2,
        "s": "Customer Support Resolution Agent",
        "q": "Match error handling: which pairs of category and correct agent behavior are right? (Select 2)",
        "o": [
          "Validation error (bad input) → always retry unchanged.",
          "Business rule violation (policy) → non-retryable; explain to the customer.",
          "Permission error → silently return empty success.",
          "Transient (timeout/service down) → retryable; the agent may retry."
        ],
        "a": [
          1,
          3
        ],
        "e": "Transient errors are retryable; business-rule violations are non-retryable and should be explained. Validation errors shouldn't be retried unchanged, and permission errors must not be masked as empty success."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A subagent's search returns zero rows because there genuinely are no matches. Why must this be distinguished from a timeout in the error reporting?",
        "o": [
          "A valid empty result is a successful query with no matches, while a timeout is an access failure needing a retry decision; conflating them causes wrong recovery.",
          "Timeouts should be reported as empty success to keep the pipeline moving.",
          "Empty results should always trigger a full workflow termination.",
          "They are equivalent, so both should be reported as 'failed'."
        ],
        "a": [
          0
        ],
        "e": "Empty-but-valid vs access-failure require different coordinator decisions. Treating them alike (or masking timeouts as empty success) breaks recovery."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You need a standard Jira integration and a niche internal-workflow integration. Which build-vs-buy guidance applies?",
        "o": [
          "Build both from scratch for full control.",
          "Use community servers for both, even the niche internal one.",
          "Avoid MCP entirely and hard-code both integrations in the prompt.",
          "Use an existing community MCP server for Jira; reserve a custom server for the team-specific workflow."
        ],
        "a": [
          3
        ],
        "e": "Prefer community MCP servers for standard integrations (Jira); reserve custom servers for team-specific needs."
      },
      {
        "d": 3,
        "s": "Developer Productivity with Claude",
        "q": "Your Edit call fails because the target text isn't unique in the file. What is the reliable fallback?",
        "o": [
          "Use Glob to locate the line, then Bash sed to patch it.",
          "Retry Edit with a shorter anchor string.",
          "Switch to a larger model.",
          "Use Read to load full contents, then Write the modified file."
        ],
        "a": [
          3
        ],
        "e": "When Edit can't find a unique anchor, Read + Write is the documented reliable fallback."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Different MCP tools return timestamps in mixed formats (Unix epoch, ISO 8601, numeric status codes), confusing the agent. Which pattern normalizes them before the model reasons over them?",
        "o": [
          "tool_choice: 'any' to force consistent tools.",
          "A larger max_tokens so all formats fit.",
          "A pre-tool prompt asking the model to expect mixed formats.",
          "A PostToolUse hook that transforms/normalizes tool results before the model processes them."
        ],
        "a": [
          3
        ],
        "e": "PostToolUse hooks intercept tool results to normalize heterogeneous formats before the model sees them — deterministic, unlike prompt guidance."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "For an extensible category field where new values keep appearing and some cases are genuinely unclear, which schema design is best?",
        "o": [
          "Make the field required with no null allowed.",
          "Use a free-text string with no enum.",
          "Use a fixed enum and force the model to pick the closest value.",
          "Use an enum plus an 'other' + detail string, and add an 'unclear' value for ambiguous cases."
        ],
        "a": [
          3
        ],
        "e": "Enum + 'other'+detail supports extensibility, and an 'unclear' value handles ambiguity without forcing a wrong pick or fabrication."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "When passing findings between agents you must preserve who said what. Which practice supports provenance?",
        "o": [
          "Let the synthesis agent rewrite claims in its own words without sources.",
          "Store sources only in the coordinator's memory, not in the passed data.",
          "Compress each finding into a one-line summary to save tokens.",
          "Require subagents to output structured claim-source mappings (source URLs, document names, excerpts) that downstream agents preserve through synthesis."
        ],
        "a": [
          3
        ],
        "e": "Structured claim-source mappings preserved through synthesis prevent attribution loss. Summarizing away sources or rewriting without them destroys provenance."
      }
    ]
  },
  {
    "id": "E",
    "name": "Package E — Prompting, Sessions & Review Architecture",
    "desc": "Few-shot design, sessions/forking, independent review, position effects, iterative refinement.",
    "questions": [
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Detailed prose instructions still yield inconsistently formatted review output. Which technique most reliably produces consistent, actionable output?",
        "o": [
          "Increase max_tokens.",
          "Switch tool_choice to 'auto'.",
          "Add 2-4 few-shot examples demonstrating the exact desired output (location, issue, severity, suggested fix).",
          "Add 'be consistent and thorough' to the prompt."
        ],
        "a": [
          2
        ],
        "e": "Few-shot examples are the most effective technique for consistent, actionable output when instructions alone are inconsistent, and they let the model generalize to novel cases."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "You paused a named investigation yesterday; today you want to continue that exact conversation. Which is correct?",
        "o": [
          "Start a brand-new session; resumption is unsupported.",
          "Use fork_session to continue the same linear conversation.",
          "Re-paste yesterday's full transcript and hope for coherence.",
          "Use --resume <session-name> to continue the named session, and tell the agent about any files that changed since."
        ],
        "a": [
          3
        ],
        "e": "--resume with a session name continues the specific prior conversation; informing it about changed files enables targeted re-analysis. fork_session is for divergent branches, not linear continuation."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "From one shared codebase-analysis baseline you want to explore two divergent refactoring strategies independently. Which mechanism fits?",
        "o": [
          "Delete the baseline and start each strategy fresh.",
          "--resume the same session for both to save context.",
          "fork_session to create independent branches from the shared baseline.",
          "Run both in the main session sequentially."
        ],
        "a": [
          2
        ],
        "e": "fork_session creates independent branches from a shared analysis baseline to compare divergent approaches without cross-contamination."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Code the model just generated needs review. Why is an independent second Claude instance more effective than asking the same session to review itself?",
        "o": [
          "The generating session retains its reasoning context and is less likely to question its own decisions; a fresh instance lacks that bias.",
          "The second instance uses a larger model automatically.",
          "Independent instances always agree, eliminating findings.",
          "Self-review is impossible in the API."
        ],
        "a": [
          0
        ],
        "e": "A model retains generation-time reasoning, reducing self-scrutiny. An independent instance without that context catches subtle issues better than self-review or extended thinking."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "You aggregate many findings into one long input for synthesis, but middle findings keep getting dropped. Which mitigations target the 'lost in the middle' effect? (Select 2)",
        "o": [
          "Organize detailed results under explicit section headers.",
          "Place a key-findings summary at the beginning of the aggregated input.",
          "Randomly shuffle findings so none is consistently in the middle.",
          "Delete half the findings to shorten the input."
        ],
        "a": [
          0,
          1
        ],
        "e": "Models process the start and end of long inputs more reliably; leading with a key-findings summary and using explicit section headers mitigate position effects. Shuffling doesn't help; deleting findings loses information."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You're implementing a feature in an unfamiliar domain (e.g., caching with tricky invalidation) and worry about missing edge cases. Which iterative-refinement technique surfaces considerations before you commit?",
        "o": [
          "Ask Claude to 'be careful about edge cases' in one line.",
          "Raise temperature to explore more designs.",
          "Immediately write the full implementation and fix bugs later.",
          "The interview pattern: have Claude ask you questions to surface considerations (invalidation strategy, failure modes) before implementing."
        ],
        "a": [
          3
        ],
        "e": "The interview pattern has Claude ask questions to surface unanticipated considerations before implementation — ideal in unfamiliar domains."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "One review category (comment-accuracy) produces so many false positives that developers now ignore ALL findings, including accurate ones. What's the recommended near-term action?",
        "o": [
          "Raise the global confidence threshold for all categories.",
          "Keep it on but add 'only report high-confidence findings'.",
          "Delete the entire review system.",
          "Temporarily disable the high-false-positive category to restore trust while you improve its prompt."
        ],
        "a": [
          3
        ],
        "e": "High-false-positive categories undermine trust in accurate ones. Temporarily disabling the bad category restores trust while you refine its criteria; blanket confidence instructions don't fix precision."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A CI pipeline must emit machine-parseable findings to post as inline PR comments. Which CLI flags enforce structured output?",
        "o": [
          "--interactive with --verbose.",
          "--pretty with --markdown.",
          "--batch with custom_id.",
          "--output-format json with --json-schema."
        ],
        "a": [
          3
        ],
        "e": "--output-format json plus --json-schema produce schema-conformant, machine-parseable findings for automated posting. The others aren't the structured-output flags."
      },
      {
        "d": 1,
        "s": "Claude Code for Continuous Integration",
        "q": "Which decomposition pattern fits which task? (Select 2)",
        "o": [
          "Prompt chaining for open-ended 'add comprehensive tests to a legacy codebase'.",
          "Dynamic adaptive decomposition for open-ended investigation where subtasks emerge from findings.",
          "Dynamic decomposition for a two-step, fully predictable pipeline.",
          "Prompt chaining (fixed sequential passes) for predictable multi-aspect code reviews."
        ],
        "a": [
          1,
          3
        ],
        "e": "Use fixed prompt chaining for predictable multi-aspect work and dynamic decomposition for open-ended investigation. The mismatched pairings (3 and 4) invert the guidance."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "A get_customer lookup returns multiple customer matches for the stated name. What should the agent do?",
        "o": [
          "Select the first match returned.",
          "Ask the customer for additional identifiers rather than picking one by heuristic.",
          "Escalate to a human immediately.",
          "Select the most recently active account."
        ],
        "a": [
          1
        ],
        "e": "Multiple matches require clarification (request additional identifiers), not heuristic selection or automatic escalation."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Documents arrive with varied structures (inline citations vs bibliographies, narrative vs tables) and extraction quality varies. Which technique most improves robustness to structural variety?",
        "o": [
          "Require every field so the model tries harder.",
          "Add few-shot examples demonstrating correct extraction from each varied document structure.",
          "Switch tool_choice to 'auto'.",
          "Increase max_tokens."
        ],
        "a": [
          1
        ],
        "e": "Few-shot examples covering varied structures help the model generalize extraction across formats and reduce empty/null extraction of present fields."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "Verbose order-lookup tool results (40+ fields, only 5 relevant) are accumulating and consuming the context budget. Best practice?",
        "o": [
          "Raise max_tokens to fit more fields.",
          "Summarize the whole conversation every turn instead.",
          "Trim tool outputs to only the relevant fields before they accumulate in context.",
          "Keep all fields; the model ignores irrelevant ones for free."
        ],
        "a": [
          2
        ],
        "e": "Trimming verbose tool outputs to only relevant fields keeps context lean. Unused fields still consume tokens disproportionately to their relevance."
      }
    ]
  }
];
