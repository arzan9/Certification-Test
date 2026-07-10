/* CCAR-F practice bank — SET 4 (Latihan 4). 60 fresh questions, distinct wording. */
const PACKAGES4 = [
  {
    "id": "P",
    "name": "Package P — Loops, Handoffs & Sessions",
    "questions": [
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "After a tool returns, what must happen before the next request so the model can decide the next action?",
        "o": [
          "Append the tool result to the conversation history.",
          "Reset the conversation to save tokens.",
          "Force stop_reason to 'end_turn'.",
          "Switch tool_choice to 'auto'."
        ],
        "a": [
          0
        ],
        "e": "Tool results are appended to context so the model reasons about the next step."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "Which are anti-patterns for terminating an agentic loop? (Select 2)",
        "o": [
          "Using an arbitrary iteration cap as the primary stop.",
          "Checking assistant text content as a completion indicator.",
          "Stopping on stop_reason 'end_turn'.",
          "Continuing on stop_reason 'tool_use'."
        ],
        "a": [
          0,
          1
        ],
        "e": "Loop control keys off stop_reason. Text-content checks and iteration caps as the primary stop are anti-patterns."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "A broad topic yields duplicated subagent work. Which strategies reduce duplication and gaps? (Select 2)",
        "o": [
          "Always run the full pipeline.",
          "Partition scope so each subagent gets distinct subtopics/source types.",
          "Give all subagents the same broad query.",
          "Run an iterative refinement loop: evaluate synthesis for gaps, re-delegate, re-synthesize."
        ],
        "a": [
          1,
          3
        ],
        "e": "Partitioning minimizes duplication; iterative refinement fills coverage gaps."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "You want two divergent refactoring strategies from the same analyzed baseline. Which session mechanism?",
        "o": [
          "--resume to keep both in one linear session.",
          "fork_session to branch independent explorations from a shared baseline.",
          "tool_choice: 'any'.",
          "/compact to duplicate the baseline."
        ],
        "a": [
          1
        ],
        "e": "fork_session branches independent explorations from a shared baseline."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "You return to a named investigation after several files changed. Most reliable resumption approach?",
        "o": [
          "Start fresh with a structured summary when prior tool results are stale; otherwise --resume and inform it about changed files.",
          "Always start fresh with no summary.",
          "Re-paste the full transcript.",
          "Always --resume regardless of staleness."
        ],
        "a": [
          0
        ],
        "e": "Fresh start with an injected summary beats resuming with stale tool results; inform resumed sessions about changed files."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "A refund must never execute before identity verification. Which enforcement guarantees the order?",
        "o": [
          "Few-shot examples.",
          "Temperature 0.",
          "A system-prompt rule.",
          "A prerequisite gate blocking process_refund until get_customer returns a verified ID."
        ],
        "a": [
          3
        ],
        "e": "Deterministic ordering needs programmatic gates, not probabilistic prompting."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "A message raises three concerns at once. Recommended handling?",
        "o": [
          "Send one generic apology.",
          "Escalate as out of scope.",
          "Answer the first and close.",
          "Decompose into distinct items, investigate each in parallel with shared context, then synthesize a unified reply."
        ],
        "a": [
          3
        ],
        "e": "Decompose multi-concern requests, investigate each, then synthesize one resolution."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "Why route all subagent communication through the coordinator?",
        "o": [
          "For observability, consistent error handling, and controlled information flow.",
          "So subagents inherit each other's context.",
          "To make the coordinator use zero tokens.",
          "Because subagents can't emit tool calls otherwise."
        ],
        "a": [
          0
        ],
        "e": "Central routing gives observability, consistent error handling, and controlled information flow."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "'Add comprehensive tests to a legacy codebase.' Which decomposition fits this open-ended task?",
        "o": [
          "A fixed pipeline written up front.",
          "One prompt for all tests.",
          "Dynamic adaptive decomposition: map structure, find high-impact areas, build a prioritized plan that adapts.",
          "A predetermined per-file order."
        ],
        "a": [
          2
        ],
        "e": "Open-ended investigation suits dynamic decomposition that adapts to discoveries."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "To configure each subagent's identity and permitted tools, which construct do you use?",
        "o": [
          "AgentDefinition (descriptions, system prompts, tool restrictions).",
          "A .mcp.json entry.",
          "The /memory command.",
          "tool_choice forced selection."
        ],
        "a": [
          0
        ],
        "e": "AgentDefinition configures each subagent's description, system prompt, and tool restrictions."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "A coordinator needs to spawn subagents. What must be true of its configuration?",
        "o": [
          "allowedTools must include 'Task'.",
          "tool_choice must be 'any'.",
          "It must disable all built-in tools.",
          "It must run in plan mode."
        ],
        "a": [
          0
        ],
        "e": "The Task tool spawns subagents; allowedTools must include 'Task'."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Some topic areas had no available sources. How should synthesis output represent that?",
        "o": [
          "Silently omit gap areas.",
          "Fabricate plausible content.",
          "Add coverage annotations distinguishing well-supported findings from gap areas due to unavailable sources.",
          "Fail the whole report."
        ],
        "a": [
          2
        ],
        "e": "Coverage annotations mark gaps rather than hiding or fabricating them."
      }
    ]
  },
  {
    "id": "Q",
    "name": "Package Q — MCP, Tools & Built-ins",
    "questions": [
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Descriptions are good but a system-prompt keyword keeps steering the model to the wrong tool. What to review?",
        "o": [
          "Only the temperature.",
          "Only max_tokens.",
          "The system prompt for keyword-sensitive instructions that override good descriptions.",
          "Nothing; descriptions always win."
        ],
        "a": [
          2
        ],
        "e": "System-prompt wording can create keyword associations that override well-written descriptions."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "A generic fetch_url lets the agent pull arbitrary URLs, causing misuse. Best replacement?",
        "o": [
          "tool_choice: 'auto' on fetch_url.",
          "Give fetch_url to more agents.",
          "fetch_url with a 'be careful' note.",
          "load_document that validates document URLs."
        ],
        "a": [
          3
        ],
        "e": "Replace generic tools with constrained alternatives that validate inputs."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "The synthesis agent needs simple fact checks 85% of the time (dates/names/stats) but currently round-trips through the coordinator, adding 40% latency. Best fix?",
        "o": [
          "Give synthesis all web-search tools.",
          "Batch all verifications to the end.",
          "Give synthesis a scoped verify_fact tool for simple lookups; keep complex verifications routed through the coordinator.",
          "Pre-cache extra context speculatively."
        ],
        "a": [
          2
        ],
        "e": "Least privilege: a scoped verify_fact tool handles the common case while complex cases keep the existing pattern."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You configured project and user MCP servers. Which is true about discovery?",
        "o": [
          "Project and user servers can't both be active.",
          "Tools from all configured servers are discovered at connection time and available simultaneously.",
          "Only one server can be active per session.",
          "MCP tools load only after a failed built-in call."
        ],
        "a": [
          1
        ],
        "e": "All configured MCP servers' tools are discovered at connection time and available at once."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "A shared team MCP server needs a GitHub token; each dev also runs a personal experimental server. Correct config? (Select 2)",
        "o": [
          "Personal servers must live in .mcp.json.",
          "Personal server in user ~/.claude.json.",
          "Commit the raw token into .mcp.json.",
          "Shared server in project .mcp.json using ${GITHUB_TOKEN} expansion."
        ],
        "a": [
          1,
          3
        ],
        "e": "Shared tooling → project .mcp.json with env-var expansion; personal → user ~/.claude.json. Never commit raw tokens."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "You must run extract_metadata FIRST, then enrich in later turns. Which config guarantees the first tool runs?",
        "o": [
          "tool_choice: 'auto'.",
          "A system-prompt note only.",
          "tool_choice: 'any'.",
          "Forced selection tool_choice: {type:'tool', name:'extract_metadata'} on the first turn."
        ],
        "a": [
          3
        ],
        "e": "Forced tool selection guarantees a specific tool is called first."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "For a business-rule violation, why return isRetryable: false in structured metadata?",
        "o": [
          "It speeds up the call.",
          "It prevents wasted retries on a non-retryable error and lets the agent explain appropriately.",
          "It terminates the workflow.",
          "It converts the error to an empty result."
        ],
        "a": [
          1
        ],
        "e": "Distinguishing retryable vs non-retryable prevents wasted retries and enables a clear explanation."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A subagent hits a transient blip it recovers from locally. What should it propagate?",
        "o": [
          "Every blip immediately.",
          "A generic 'failed' status.",
          "An empty success.",
          "Nothing for the recovered blip; propagate only unresolved errors with partial results and what was attempted."
        ],
        "a": [
          3
        ],
        "e": "Subagents recover locally for transient failures and propagate only unresolved errors with context."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "The agent prefers built-in Grep over a more capable MCP search tool. Best fix?",
        "o": [
          "Remove Grep.",
          "Enhance the MCP tool's description to explain its capabilities and outputs.",
          "Rename the MCP tool to start with 'a'.",
          "Force tool_choice: 'any'."
        ],
        "a": [
          1
        ],
        "e": "Detailed MCP descriptions make the agent prefer the more capable tool."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Find every file matching **/*.spec.ts, and separately find every place an error message string appears in file contents. Which tools?",
        "o": [
          "Glob for the filename pattern; Grep for the content search.",
          "Read for both.",
          "Bash find for both.",
          "Grep for the filename pattern; Glob for content."
        ],
        "a": [
          0
        ],
        "e": "Glob matches file paths; Grep searches file contents."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "You want the model to call a tool rather than return conversational text, without pinning which tool. Which setting?",
        "o": [
          "tool_choice: 'any'.",
          "Forced selection.",
          "Omit tool_choice.",
          "tool_choice: 'auto'."
        ],
        "a": [
          0
        ],
        "e": "'any' guarantees a tool call while leaving the choice of tool to the model."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Passing findings to a synthesis subagent, how to preserve attribution?",
        "o": [
          "Use structured formats separating content from metadata (source URLs, document names, page numbers).",
          "Send content only, drop metadata.",
          "Let synthesis infer sources from wording.",
          "Concatenate everything into one string."
        ],
        "a": [
          0
        ],
        "e": "Structured content/metadata separation preserves attribution across handoffs."
      }
    ]
  },
  {
    "id": "R",
    "name": "Package R — Claude Code Workflows & Refinement",
    "questions": [
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You want to verify which memory/config files Claude Code actually loaded due to inconsistent behavior. Which command?",
        "o": [
          "--resume.",
          "/flag.",
          "/compact.",
          "/memory."
        ],
        "a": [
          3
        ],
        "e": "/memory shows which memory files are loaded, helping diagnose hierarchy issues."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Which advantage do glob-pattern rules in .claude/rules/ have over subdirectory CLAUDE.md files?",
        "o": [
          "They apply to files by type regardless of directory, so they cover files spread across the codebase.",
          "They require no frontmatter.",
          "They override user-level config.",
          "They load faster."
        ],
        "a": [
          0
        ],
        "e": "Glob-pattern rules apply by file type across directories; directory CLAUDE.md files are directory-bound."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Path-scoped rules with paths frontmatter provide what benefit besides correctness?",
        "o": [
          "They force plan mode.",
          "They disable other rules globally.",
          "They load only when editing matching files, reducing irrelevant context and token usage.",
          "They commit secrets safely."
        ],
        "a": [
          2
        ],
        "e": "Path-scoped rules load conditionally, cutting irrelevant context and tokens."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You invoke a skill without arguments and want Claude to prompt for the required parameter. Which frontmatter field?",
        "o": [
          "allowed-tools.",
          "context: fork.",
          "paths.",
          "argument-hint."
        ],
        "a": [
          3
        ],
        "e": "argument-hint prompts developers for required parameters."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A skill produces exploratory output and must be limited to file-write operations only. Which two frontmatter options? (Select 2)",
        "o": [
          "allowed-tools to restrict its tools.",
          "argument-hint to force output into the main session.",
          "paths to always load it.",
          "context: fork to isolate its output."
        ],
        "a": [
          0,
          3
        ],
        "e": "context: fork isolates output; allowed-tools restricts tools."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You want a personal variant of a team skill without affecting teammates. Where and how?",
        "o": [
          "Edit the shared .claude/skills/ file directly.",
          "Put it in root CLAUDE.md.",
          "Create a personal variant in ~/.claude/skills/ with a different name.",
          "Add it to .mcp.json."
        ],
        "a": [
          2
        ],
        "e": "Personal skill variants live in ~/.claude/skills/ with different names to avoid affecting teammates."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Migrating a library across 45+ files, then implementing the plan. Recommended combination?",
        "o": [
          "One prompt for the whole migration.",
          "Plan mode to investigate/design, then direct execution for the planned approach.",
          "Plan mode for every one-line edit.",
          "Direct execution throughout."
        ],
        "a": [
          1
        ],
        "e": "Combine plan mode for investigation with direct execution for implementation."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A verbose discovery phase threatens context exhaustion in a multi-phase task. Which mechanism isolates it and returns a summary?",
        "o": [
          "The Explore subagent.",
          "Increase max_tokens and keep everything inline.",
          "Switch to direct execution.",
          "Disable tool use during discovery."
        ],
        "a": [
          0
        ],
        "e": "The Explore subagent isolates verbose discovery and returns a summary to preserve main context."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Prose descriptions of a data transformation are interpreted inconsistently. Most effective communication?",
        "o": [
          "Write longer prose.",
          "Add 'be precise'.",
          "Lower temperature and resend the prose.",
          "Provide 2-3 concrete input/output examples."
        ],
        "a": [
          3
        ],
        "e": "Concrete input/output examples communicate transformations best."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You worry about missing edge cases implementing caching in an unfamiliar domain. Which refinement technique surfaces considerations first?",
        "o": [
          "The interview pattern: have Claude ask questions (invalidation, failure modes) before implementing.",
          "Raise temperature.",
          "Say 'be careful about edge cases'.",
          "Write the full implementation and fix later."
        ],
        "a": [
          0
        ],
        "e": "The interview pattern surfaces unanticipated considerations before implementation."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You have several bugs. When to send all in one message vs one at a time?",
        "o": [
          "Always sequential.",
          "It never matters.",
          "One message when fixes interact; sequential when problems are independent.",
          "Always one message."
        ],
        "a": [
          2
        ],
        "e": "Interacting problems go together; independent ones go sequentially."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "Test generation keeps proposing scenarios already covered. Which two practices help? (Select 2)",
        "o": [
          "Document testing standards, valuable-test criteria, and fixtures in CLAUDE.md.",
          "Ask for as many tests as possible.",
          "Run with -p so it can't see existing tests.",
          "Provide existing test files in context."
        ],
        "a": [
          0,
          3
        ],
        "e": "Existing tests prevent duplicates; documented standards/fixtures raise quality."
      }
    ]
  },
  {
    "id": "S",
    "name": "Package S — Structured Output & Batch",
    "questions": [
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You define an extraction tool. How do you get the structured data out?",
        "o": [
          "Use tool_choice: 'auto' and hope for JSON.",
          "Define a JSON schema as the tool's input parameters and read structured data from the tool_use response.",
          "Parse the assistant's free text.",
          "Read it from stop_reason."
        ],
        "a": [
          1
        ],
        "e": "Define the schema as tool input parameters and extract from the tool_use response."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Source formats vary (units, dates). You already use a strict output schema. What else is needed?",
        "o": [
          "Nothing; the schema normalizes formats.",
          "Switch to free-text output.",
          "Raise temperature.",
          "Include format-normalization rules in the prompt alongside the schema."
        ],
        "a": [
          3
        ],
        "e": "Strict schemas guarantee structure, not normalized values; add normalization rules to the prompt."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Reviewers get inconsistent severity labels. What most improves consistency?",
        "o": [
          "Define explicit severity criteria with a concrete code example per level.",
          "Ask for a numeric confidence per label.",
          "Say 'use good judgment'.",
          "Increase max_tokens."
        ],
        "a": [
          0
        ],
        "e": "Explicit criteria anchored by code examples per level produce consistent classification."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Few-shot examples should help the model generalize to novel ambiguous cases. What should they show?",
        "o": [
          "One example with the answer only.",
          "Contradictory examples to force caution.",
          "2-4 examples exposing the reasoning for choosing one action over plausible alternatives.",
          "20+ exhaustive examples."
        ],
        "a": [
          2
        ],
        "e": "A few reasoning-rich examples help the model generalize rather than memorize."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You want to systematically analyze which code constructs trigger dismissed findings. What helps?",
        "o": [
          "Turn off structured output.",
          "Add a detected_pattern field to structured findings and analyze dismissal patterns.",
          "Increase temperature.",
          "Email you on each dismissal."
        ],
        "a": [
          1
        ],
        "e": "A detected_pattern field correlates dismissals with specific constructs for prompt refinement."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Two workflows: a blocking pre-merge check and an overnight tech-debt report. Manager wants both on the Batches API for 50% savings. Best call?",
        "o": [
          "Batch for the overnight report only; keep real-time for the pre-merge check.",
          "Keep real-time for both.",
          "Batch both with a real-time timeout fallback.",
          "Batch both with polling."
        ],
        "a": [
          0
        ],
        "e": "Batch (up to 24h, no SLA) fits overnight jobs, not blocking pre-merge checks."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Which is TRUE of the Message Batches API?",
        "o": [
          "It doesn't support multi-turn tool calling within a single request.",
          "It costs 50% more.",
          "It guarantees sub-minute latency.",
          "It has no way to correlate requests and responses."
        ],
        "a": [
          0
        ],
        "e": "Batch can't execute tools mid-request; it gives 50% savings, up to 24h, and correlates via custom_id."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Before batch-processing 10,000 documents, what most reduces resubmission cost?",
        "o": [
          "Refine the prompt on a small sample first to maximize first-pass success.",
          "Submit all 10,000 immediately.",
          "Skip validation.",
          "Use the synchronous API for all."
        ],
        "a": [
          0
        ],
        "e": "Sample-set prompt refinement maximizes first-pass success and cuts resubmission cost."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Validation fails on structural output errors. Best correction approach?",
        "o": [
          "Mark the fields optional.",
          "Send a follow-up including the original document, the failed extraction, and the specific validation errors.",
          "Retry with the identical prompt.",
          "Lower temperature only."
        ],
        "a": [
          1
        ],
        "e": "Retry-with-error-feedback that includes the document, failed extraction, and specific errors guides correction."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "When is a retry guaranteed to be ineffective?",
        "o": [
          "When the output structure was malformed.",
          "When the JSON had a format mismatch.",
          "When the required information exists only in an external document that was never provided.",
          "When a field was in the wrong place."
        ],
        "a": [
          2
        ],
        "e": "Retries can't conjure absent information; they help with format/structural errors."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "For calibrated review routing on findings, what should a verification pass output?",
        "o": [
          "Only findings the model is 100% sure of.",
          "A self-reported confidence level alongside each finding.",
          "No metadata at all.",
          "All findings merged into one paragraph."
        ],
        "a": [
          1
        ],
        "e": "Per-finding confidence enables calibrated routing of review attention."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "A required field extracts empty because the model couldn't parse an unusual layout, though the value is present. Direct fix?",
        "o": [
          "Add few-shot examples of extraction from that varied structure.",
          "Retry identically.",
          "Mark the field optional.",
          "Raise temperature."
        ],
        "a": [
          0
        ],
        "e": "Few-shot examples for varied structures fix empty extraction of present fields."
      }
    ]
  },
  {
    "id": "T",
    "name": "Package T — Reliability, Provenance & Review",
    "questions": [
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "A frustrated customer has a simple, in-scope issue but hasn't asked for a human. Best approach?",
        "o": [
          "Escalate on negative sentiment.",
          "Ask them to rate frustration 1-10 first.",
          "Ignore the emotion and process silently.",
          "Acknowledge frustration and offer to resolve now; escalate only if they reiterate wanting a human."
        ],
        "a": [
          3
        ],
        "e": "Acknowledge and offer resolution when capable; escalate only on reiterated preference. Sentiment isn't a reliable trigger."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Why are sentiment-based escalation and self-reported confidence poor escalation proxies?",
        "o": [
          "They only work in batch mode.",
          "They don't reliably correlate with actual case complexity.",
          "They require labeled data.",
          "They are too slow to compute."
        ],
        "a": [
          1
        ],
        "e": "Sentiment and self-reported confidence are unreliable proxies for real case complexity."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Attribution is lost after summarization when combining findings. Best requirement?",
        "o": [
          "Summarize findings into one paragraph.",
          "Require subagents to output structured claim-source mappings (source URLs, names, excerpts) that synthesis preserves and merges.",
          "Let synthesis paraphrase freely.",
          "Keep citations only in coordinator memory."
        ],
        "a": [
          1
        ],
        "e": "Structured claim-source mappings preserved through synthesis prevent attribution loss."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "A synthesis report mixes financial data, news, and technical findings. Clearest rendering?",
        "o": [
          "One uniform bullet format for all.",
          "Drop the least common type.",
          "One long paragraph.",
          "Financial data as tables, news as prose, technical findings as structured lists."
        ],
        "a": [
          3
        ],
        "e": "Render each content type in its natural form rather than forcing uniformity."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "To safely reduce human review of high-confidence extractions, which practices apply? (Select 2)",
        "o": [
          "Trust the aggregate number and stop reviewing.",
          "Route the highest-confidence items to extra human review.",
          "Stratified random sampling of high-confidence extractions for ongoing error measurement.",
          "Analyze accuracy by document type and field for consistent performance."
        ],
        "a": [
          2,
          3
        ],
        "e": "Stratified sampling and per-segment analysis validate readiness; you route LOW-confidence items to humans, not high-confidence."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "How are field-level confidence review thresholds best set?",
        "o": [
          "By intuition.",
          "Calibrated using a labeled validation set.",
          "At a fixed 90% for all fields.",
          "Randomly to spread load."
        ],
        "a": [
          1
        ],
        "e": "Field-level confidence should be calibrated against labeled validation data."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Progressive summarization is condensing exact percentages and customer-stated expectations. Risk and fix?",
        "o": [
          "Temperature is too low.",
          "It loses precise values; persist transactional facts in a case-facts block outside summarized history.",
          "The context window is too small; no fix.",
          "Make summaries even shorter."
        ],
        "a": [
          1
        ],
        "e": "Persist precise values as a structured case-facts block included each turn."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "Before spawning subagents for the next exploration phase, what improves downstream reliability?",
        "o": [
          "Pass the entire raw history to each subagent.",
          "Summarize key findings from the current phase and inject them into the subagents' initial context.",
          "Disable scratchpad files.",
          "Give subagents no context to keep them unbiased."
        ],
        "a": [
          1
        ],
        "e": "Summarize key findings and inject them into subagent context before the next phase."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Downstream agents have limited context budgets. How should upstream agents return their work?",
        "o": [
          "Return raw tool dumps.",
          "Return full reasoning transcripts.",
          "Return structured data (key facts, citations, relevance scores) instead of verbose content and reasoning chains.",
          "Return nothing; let downstream re-derive."
        ],
        "a": [
          2
        ],
        "e": "When downstream budgets are limited, upstream agents should return structured data, not verbose content."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "A subagent times out mid-search. Best error propagation to the coordinator?",
        "o": [
          "An empty result marked successful.",
          "A generic 'unavailable' status.",
          "Terminate the whole workflow.",
          "Structured error context: failure type, attempted query, partial results, alternatives."
        ],
        "a": [
          3
        ],
        "e": "Structured error context enables intelligent coordinator recovery."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "A 14-file PR reviewed in one pass gives uneven depth and contradictory feedback. Best restructure?",
        "o": [
          "Use a larger-context model in one pass.",
          "Force developers into 3-4 file PRs.",
          "Vote across three full-PR passes.",
          "Per-file passes for local issues, then a separate cross-file integration pass."
        ],
        "a": [
          3
        ],
        "e": "Per-file passes plus an integration pass address attention dilution without suppressing real bugs."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Why is an independent second Claude instance better than same-session self-review?",
        "o": [
          "It always uses a bigger model.",
          "It lacks the generator's reasoning context and is more likely to question decisions.",
          "Independent instances never find issues.",
          "Self-review is disallowed by the API."
        ],
        "a": [
          1
        ],
        "e": "An independent instance without generation-time reasoning catches subtle issues self-review misses."
      }
    ]
  }
];
