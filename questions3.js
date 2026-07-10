/* CCAR-F practice bank — SET 3 (Latihan 3). 60 fresh questions, distinct wording. */
const PACKAGES3 = [
  {
    "id": "K",
    "name": "Package K — Agentic Loops & Orchestration",
    "questions": [
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Your loop keeps running one extra iteration and re-calls tools after the task is already done. The code stops only when the assistant text contains 'finished'. What is the correct control signal?",
        "o": [
          "Continue while stop_reason is 'tool_use' and stop when it is 'end_turn'.",
          "Stop when the assistant text says 'finished'.",
          "Stop after a fixed cap of 8 iterations.",
          "Stop when no new tool result differs from the last."
        ],
        "a": [
          0
        ],
        "e": "Loop control must key off stop_reason, not natural-language text. Continue on 'tool_use', terminate on 'end_turn'."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "What distinguishes a model-driven agentic loop from a pre-configured decision tree?",
        "o": [
          "The loop cannot use more than one tool.",
          "Claude reasons about which tool to call next based on accumulated context, rather than following a fixed tool sequence.",
          "Tools are chosen by a keyword parser before each turn.",
          "The model runs faster."
        ],
        "a": [
          1
        ],
        "e": "Model-driven loops let Claude decide the next tool from context; decision trees hard-code the sequence."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "A coordinator always routes every query through all four subagents even for simple lookups, wasting latency. Better design?",
        "o": [
          "Always run the full pipeline for consistency.",
          "Give every subagent all tools so routing is unnecessary.",
          "Remove the coordinator and let subagents self-organize.",
          "Have the coordinator analyze query requirements and dynamically select only the subagents needed."
        ],
        "a": [
          3
        ],
        "e": "Coordinators should dynamically select subagents by query complexity rather than always invoking the full pipeline."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "To cut latency you want two subagents to run at the same time. What produces true parallel spawning?",
        "o": [
          "Emit multiple Task tool calls within a single coordinator response.",
          "Set tool_choice to 'any'.",
          "Increase max_tokens.",
          "Emit one Task call per turn across separate turns."
        ],
        "a": [
          0
        ],
        "e": "Parallel subagents come from multiple Task calls in one response; separate turns run sequentially."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Identity verification must ALWAYS precede a refund, with zero tolerance for failure. Which approach guarantees ordering?",
        "o": [
          "A programmatic prerequisite gate that blocks process_refund until get_customer returns a verified ID.",
          "A strongly-worded system prompt instruction.",
          "Setting temperature to 0.",
          "Few-shot examples of correct ordering."
        ],
        "a": [
          0
        ],
        "e": "Deterministic ordering for financial operations needs programmatic gates; prompt-based guidance has a non-zero failure rate."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Which Agent SDK hook pattern would you use to enforce that no refund over $500 is ever executed automatically?",
        "o": [
          "A retry-with-backoff wrapper.",
          "A tool-call interception hook that blocks the offending call and redirects to escalation.",
          "A prompt reminder about the $500 limit.",
          "A PostToolUse hook that summarizes results."
        ],
        "a": [
          1
        ],
        "e": "Outgoing tool-call interception hooks enforce hard compliance rules like a refund ceiling, deterministically."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Different MCP tools return timestamps as Unix epoch and ISO 8601, confusing downstream reasoning. Which hook normalizes them before the model sees results?",
        "o": [
          "A PostToolUse hook that transforms heterogeneous formats.",
          "A pre-request system prompt note.",
          "A larger context window.",
          "tool_choice: 'any'."
        ],
        "a": [
          0
        ],
        "e": "PostToolUse hooks intercept and normalize tool results before the model processes them."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "When passing web-search results to a synthesis subagent, how should the coordinator include them?",
        "o": [
          "Send only a one-line topic label.",
          "Assume the subagent inherits the coordinator's history automatically.",
          "Place the complete prior findings directly in the synthesis subagent's prompt.",
          "Store them in shared memory the subagent will read."
        ],
        "a": [
          2
        ],
        "e": "Subagents don't inherit parent context; findings must be included explicitly in the subagent's prompt."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "A subagent times out. Which report best enables coordinator recovery?",
        "o": [
          "A generic 'unavailable' status.",
          "An empty result marked successful.",
          "An exception that halts the whole run.",
          "Structured error context: failure type, attempted query, partial results, and alternatives."
        ],
        "a": [
          3
        ],
        "e": "Structured error context lets the coordinator retry differently, try alternatives, or proceed with partial results."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "For a predictable multi-aspect code review, which decomposition pattern fits best?",
        "o": [
          "Prompt chaining: fixed sequential focused passes.",
          "A single monolithic prompt.",
          "Random ordering of files.",
          "Dynamic adaptive decomposition driven by discoveries."
        ],
        "a": [
          0
        ],
        "e": "Predictable multi-aspect reviews suit fixed prompt chaining; dynamic decomposition is for open-ended investigation."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "Coordinator prompts to subagents should primarily specify what?",
        "o": [
          "Only the raw topic string.",
          "Research goals and quality criteria, enabling subagent adaptability.",
          "A ban on all tool use.",
          "Exact procedural steps to follow verbatim."
        ],
        "a": [
          1
        ],
        "e": "Goal-and-criteria prompts enable adaptability; rigid procedures reduce subagent effectiveness on novel inputs."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Escalating to a human who cannot see the chat transcript. What must the handoff summary contain?",
        "o": [
          "The entire raw tool log.",
          "Customer ID, root cause, refund amount, and recommended action.",
          "Only the customer's name.",
          "Nothing; the human can reopen the session."
        ],
        "a": [
          1
        ],
        "e": "Structured handoffs include customer ID, root cause, amounts, and recommended action for humans lacking the transcript."
      }
    ]
  },
  {
    "id": "L",
    "name": "Package L — Tool Design & MCP",
    "questions": [
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Two tools have near-identical minimal descriptions and the model misroutes between them. Most effective first fix?",
        "o": [
          "Add 8 few-shot examples.",
          "Expand each description with input formats, example queries, edge cases, and when-to-use boundaries.",
          "Merge them into one tool.",
          "Build a keyword routing layer."
        ],
        "a": [
          1
        ],
        "e": "Tool descriptions are the primary selection mechanism; enriching them is the low-effort, high-leverage first fix."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "analyze_content and analyze_document overlap functionally. Besides better descriptions, what removes the overlap most directly?",
        "o": [
          "Add both to more agents.",
          "Increase max_tokens.",
          "Rename analyze_content to a specific name like extract_web_results with a web-specific description.",
          "Give both tool_choice: 'any'."
        ],
        "a": [
          2
        ],
        "e": "Renaming to a purpose-specific tool eliminates functional ambiguity."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "A generic analyze_document is misused. Best refactor?",
        "o": [
          "Force tool_choice: 'auto'.",
          "Keep one tool with a longer description.",
          "Give it to every subagent.",
          "Split into purpose-specific tools: extract_data_points, summarize_content, verify_claim_against_source."
        ],
        "a": [
          3
        ],
        "e": "Splitting a generic tool into purpose-specific tools with defined I/O contracts reduces misuse."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "An agent grew to 18 tools and selection became unreliable. Principle and fix?",
        "o": [
          "Set tool_choice: 'auto' to ignore extras.",
          "More tools always help.",
          "Too many tools raises decision complexity; scope each agent to the 4-5 tools its role needs.",
          "Number the tool names."
        ],
        "a": [
          2
        ],
        "e": "Excess tools degrade selection; restrict each agent to role-relevant tools."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A synthesis agent keeps attempting web searches it shouldn't. Best remedy?",
        "o": [
          "Lower temperature.",
          "Restrict its tool set to synthesis-relevant tools, preventing cross-specialization misuse.",
          "Add a prompt note to avoid searching.",
          "Give it more search tools so it does them well."
        ],
        "a": [
          1
        ],
        "e": "Agents with out-of-specialization tools misuse them; scope tools to the role."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "You must guarantee the model calls one of several extraction tools (type unknown) rather than replying with text. Which tool_choice?",
        "o": [
          "Omit it.",
          "'auto'.",
          "'any'.",
          "forced {type:'tool', name:'extract_metadata'}."
        ],
        "a": [
          2
        ],
        "e": "'any' forces a tool call while letting the model pick the schema — right when the document type is unknown."
      },
      {
        "d": 2,
        "s": "Customer Support Resolution Agent",
        "q": "An MCP tool must signal failure. Which mechanism plus metadata is appropriate? (Select 2)",
        "o": [
          "Use the isError flag to signal failure.",
          "Return errorCategory and an isRetryable boolean.",
          "Return the same generic message for all errors.",
          "Always return an empty success body."
        ],
        "a": [
          0,
          1
        ],
        "e": "The isError flag signals failure; structured metadata (category + isRetryable) lets the agent choose recovery. Empty success and uniform generic errors block good decisions."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A query returns zero rows because nothing matches. How to report it vs a timeout?",
        "o": [
          "As a valid empty result (successful query, no matches), distinct from an access failure like a timeout.",
          "Both as generic failures.",
          "The timeout as empty success.",
          "The empty result as a failure to be safe."
        ],
        "a": [
          0
        ],
        "e": "Valid empty results must be distinguished from access failures so the coordinator recovers correctly."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You need a standard Jira integration and a niche internal workflow. Build-vs-buy?",
        "o": [
          "Avoid MCP; hardcode in the prompt.",
          "Use community servers for both.",
          "Build both custom.",
          "Use a community MCP server for Jira; build custom only for the internal workflow."
        ],
        "a": [
          3
        ],
        "e": "Prefer community servers for standard integrations; reserve custom servers for team-specific needs."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Agents expose issue summaries and doc hierarchies to avoid exploratory tool calls. Which MCP concept and why?",
        "o": [
          "MCP tools — one per document.",
          "MCP resources — they expose content catalogs; tools are for actions.",
          "isError flags.",
          "System prompt listing everything."
        ],
        "a": [
          1
        ],
        "e": "MCP resources expose content catalogs; tools perform actions."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Your Edit fails because the anchor text isn't unique. Reliable fallback?",
        "o": [
          "Retry Edit with a shorter anchor.",
          "Read the whole file, then Write the modified contents.",
          "Use Glob to patch the line.",
          "Delete and recreate the file."
        ],
        "a": [
          1
        ],
        "e": "When Edit lacks a unique anchor, Read + Write is the reliable fallback."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "To trace all callers of a function across the codebase, which tool sequence?",
        "o": [
          "Glob for the function-name content.",
          "Grep to find callers and entry points, then Read to follow imports and trace flows.",
          "Edit files to add logging.",
          "Read every file upfront."
        ],
        "a": [
          1
        ],
        "e": "Grep searches contents for callers; Read follows the traced flow incrementally."
      }
    ]
  },
  {
    "id": "M",
    "name": "Package M — Claude Code Config & CI",
    "questions": [
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A /deploy-check slash command must be available to all developers on clone/pull. Where should it live?",
        "o": [
          "In .claude/config.json commands array.",
          "~/.claude/commands/ per developer.",
          ".claude/commands/ in the project repo.",
          "In root CLAUDE.md."
        ],
        "a": [
          2
        ],
        "e": "Project-scoped commands in .claude/commands/ are version-controlled and shared automatically."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A new teammate's Claude ignores standards that live in each senior dev's ~/.claude/CLAUDE.md. Root cause and fix?",
        "o": [
          "User-level config syncs via the repo; their clone is stale.",
          "Run /compact to reload.",
          "Those are user-level and not shared via VC; move them to project-level .claude/CLAUDE.md.",
          "Duplicate into every subdirectory."
        ],
        "a": [
          2
        ],
        "e": "~/.claude/CLAUDE.md is user-scoped and never travels with the repo; project-level config is the shared layer."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Test files (Button.test.tsx) are scattered next to sources and must all follow one convention automatically. Best mechanism?",
        "o": [
          "A skill per code type.",
          "One big root CLAUDE.md with headers, relying on inference.",
          ".claude/rules/ files with YAML frontmatter glob patterns like paths:['**/*.test.tsx'].",
          "A CLAUDE.md per subdirectory."
        ],
        "a": [
          2
        ],
        "e": "Glob-scoped rules apply by file path regardless of directory — ideal for scattered test files."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You want a verbose codebase-analysis skill to run isolated from the main conversation. Which frontmatter option?",
        "o": [
          "context: fork.",
          "allowed-tools.",
          "argument-hint.",
          "paths."
        ],
        "a": [
          0
        ],
        "e": "context: fork runs the skill in an isolated sub-agent context so verbose output doesn't pollute the main session."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "When should you choose a skill over putting instructions in CLAUDE.md?",
        "o": [
          "They are interchangeable.",
          "Always use CLAUDE.md.",
          "Skills for on-demand, task-specific workflows; CLAUDE.md for always-loaded universal standards.",
          "Always use skills."
        ],
        "a": [
          2
        ],
        "e": "Skills are invoked on demand for specific workflows; CLAUDE.md holds always-loaded universal standards."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You want to keep a large CLAUDE.md modular and only include standards relevant to each package. Which syntax helps?",
        "o": [
          "tool_choice: 'any'.",
          "A .mcp.json entry.",
          "@import to reference external standards files.",
          "<<include>> macros."
        ],
        "a": [
          2
        ],
        "e": "@import references external files so each package's CLAUDE.md includes only relevant standards."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Restructuring a monolith into microservices across dozens of files with multiple valid designs. Best approach?",
        "o": [
          "Direct execution with exhaustive upfront instructions.",
          "Direct execution, switching later if needed.",
          "Enter plan mode to explore and design before changing code.",
          "Direct execution, discovering boundaries as you go."
        ],
        "a": [
          2
        ],
        "e": "Architectural, large-scale, multi-approach work is the canonical plan-mode case."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A single-file bug fix with a clear stack trace. Best approach?",
        "o": [
          "Plan mode to be safe.",
          "Direct execution — the change is well-scoped.",
          "A full multi-agent pipeline.",
          "Explore subagent first."
        ],
        "a": [
          1
        ],
        "e": "Simple, well-scoped changes suit direct execution; plan mode is for complex/architectural tasks."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "A CI job hangs waiting for interactive input. Correct fix?",
        "o": [
          "Set CLAUDE_HEADLESS=true.",
          "Add the -p (--print) flag for non-interactive mode.",
          "Add a --batch flag.",
          "Redirect stdin from /dev/null."
        ],
        "a": [
          1
        ],
        "e": "-p / --print runs non-interactively, prints to stdout, and exits — required for CI."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "CI must emit machine-parseable findings for inline PR comments. Which flags?",
        "o": [
          "--output-format json with --json-schema.",
          "--interactive with --verbose.",
          "--batch with custom_id.",
          "--pretty with --markdown."
        ],
        "a": [
          0
        ],
        "e": "--output-format json plus --json-schema produce schema-conformant, parseable output for automation."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "Re-running review after each commit posts duplicate comments. Fix?",
        "o": [
          "Include prior findings in context and instruct Claude to report only new or still-unaddressed issues.",
          "Disable review after the first commit.",
          "Switch to the Batches API.",
          "Post everything and let developers filter."
        ],
        "a": [
          0
        ],
        "e": "Passing prior findings and reporting only new/unaddressed issues avoids duplicate comments."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "Why is the same session that generated code less effective at reviewing its own changes?",
        "o": [
          "Self-review is blocked by the CLI.",
          "Reviews require the Batches API.",
          "It always uses a smaller model on review.",
          "It retains generation-time reasoning context and is less likely to question its own decisions; an independent instance is better."
        ],
        "a": [
          3
        ],
        "e": "Session context isolation matters; an independent review instance without prior reasoning catches more subtle issues."
      }
    ]
  },
  {
    "id": "N",
    "name": "Package N — Prompting & Structured Output",
    "questions": [
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "A review prompt says 'check comments are accurate' and floods false positives. Best precision fix?",
        "o": [
          "Add 'be conservative'.",
          "Use explicit criteria: 'flag a comment only when its claimed behavior contradicts the actual code behavior'.",
          "Ask for confidence and drop below 8/10.",
          "Enlarge the context window."
        ],
        "a": [
          1
        ],
        "e": "Specific categorical criteria beat vague instructions; 'be conservative' and confidence thresholds don't reliably improve precision."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Detailed prose still yields inconsistent output formats. Most reliable technique for consistent, actionable output?",
        "o": [
          "Add 'be consistent'.",
          "Increase max_tokens.",
          "Add 2-4 few-shot examples showing the exact format (location, issue, severity, suggested fix).",
          "Switch tool_choice to 'auto'."
        ],
        "a": [
          2
        ],
        "e": "Few-shot examples are the most effective technique for consistent, actionable output."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You need guaranteed schema-compliant output with no JSON syntax errors. Best approach?",
        "o": [
          "Lower temperature.",
          "tool_use with a JSON schema; read structured data from the tool_use response.",
          "Regex-extract JSON from free text.",
          "Ask for 'valid JSON only' in prose."
        ],
        "a": [
          1
        ],
        "e": "tool_use with a JSON schema is the most reliable path and eliminates syntax errors."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Which is true of strict JSON schemas via tool use?",
        "o": [
          "They eliminate syntax errors but not semantic errors like wrong-field values or non-summing totals.",
          "They eliminate both syntax and semantic errors.",
          "They guarantee every required field was present in the source.",
          "They remove the need for validation."
        ],
        "a": [
          0
        ],
        "e": "Strict schemas fix syntax, not semantics; semantic validation is still required."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Documents sometimes lack a field and the model fabricates values. Best schema fix?",
        "o": [
          "Add 'do not hallucinate' in prose.",
          "Mark all fields required.",
          "Retry until every field is filled.",
          "Make those fields optional/nullable so the model returns null when info is absent."
        ],
        "a": [
          3
        ],
        "e": "Nullable/optional fields stop fabrication to satisfy required fields."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "An extensible category field keeps getting new values and some cases are genuinely unclear. Best design?",
        "o": [
          "Enum plus 'other' + detail string, and an 'unclear' value for ambiguous cases.",
          "Required field, no null.",
          "Free text, no enum.",
          "Fixed enum forcing the closest value."
        ],
        "a": [
          0
        ],
        "e": "Enum + 'other'+detail supports extensibility; 'unclear' handles ambiguity without forcing a wrong pick."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Validation fails. When will a retry-with-error-feedback loop succeed vs fail? (Select 2)",
        "o": [
          "Fail: the required info is absent from the provided source.",
          "Fail: a trailing-comma JSON syntax error.",
          "Succeed: format/structural errors, with the specific error appended.",
          "Succeed: the value exists only in an external document you never provided."
        ],
        "a": [
          0,
          2
        ],
        "e": "Retries fix format/structural errors; they can't succeed when info is absent. (Syntax is already eliminated by tool_use; missing external docs can't be recovered.)"
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You must catch invoices whose line items don't sum to the stated total. Which self-correction design?",
        "o": [
          "Mark total required.",
          "Extract calculated_total alongside stated_total and flag discrepancies; add a conflict_detected boolean.",
          "Rely on the strict schema to reject mismatches.",
          "Lower temperature."
        ],
        "a": [
          1
        ],
        "e": "Semantic errors like non-summing totals aren't caught by schemas; emitting both totals plus a conflict flag surfaces them."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Batch window is up to 24h; you must guarantee a 30h SLA. Submission cadence?",
        "o": [
          "Submit once daily at midnight.",
          "Submit on ~4-hour windows so worst-case 24h processing still lands within 30h.",
          "Submit only after the previous batch completes.",
          "Submit synchronously."
        ],
        "a": [
          1
        ],
        "e": "~4-hour submission windows keep worst-case 24h completion within a 30-hour SLA."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "A batch partially fails: some documents exceeded context limits. Best handling? (Select 2)",
        "o": [
          "Chunk oversized documents before resubmitting.",
          "Resubmit the whole batch.",
          "Resubmit only failed documents by custom_id.",
          "Mark failures as empty successes."
        ],
        "a": [
          0,
          2
        ],
        "e": "Resubmit only failed items (via custom_id) with fixes like chunking; don't reprocess everything or mask failures."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "A required field extracted empty though the value IS present in an unusual layout. Most direct fix?",
        "o": [
          "Add few-shot examples showing correct extraction from that varied structure.",
          "Raise temperature.",
          "Retry with the identical prompt.",
          "Mark the field optional."
        ],
        "a": [
          0
        ],
        "e": "Few-shot examples for varied structures address empty extraction of present fields."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "One review category's false positives are so bad developers ignore all findings. Near-term action?",
        "o": [
          "Raise a global confidence threshold.",
          "Delete the whole pipeline.",
          "Temporarily disable that category to restore trust while improving its prompt.",
          "Add 'only high-confidence findings'."
        ],
        "a": [
          2
        ],
        "e": "High-false-positive categories erode trust in accurate ones; disable temporarily while refining criteria."
      }
    ]
  },
  {
    "id": "O",
    "name": "Package O — Context, Reliability & Escalation",
    "questions": [
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Summarization keeps dropping the exact refund amount and order dates over a long chat. Best mitigation?",
        "o": [
          "Increase max_tokens.",
          "Ask the model to remember important numbers.",
          "Keep a persistent case-facts block (amounts, dates, order numbers, statuses) in every prompt, outside summarized history.",
          "Resend the full raw transcript each turn."
        ],
        "a": [
          2
        ],
        "e": "Progressive summarization loses precise values; a structured case-facts block preserves them."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Aggregating many findings into one long input, the middle ones get dropped. Which mitigations target 'lost in the middle'? (Select 2)",
        "o": [
          "Put a key-findings summary at the beginning.",
          "Shuffle findings randomly.",
          "Use explicit section headers for detailed results.",
          "Delete half the findings."
        ],
        "a": [
          0,
          2
        ],
        "e": "Leading with a key-findings summary and explicit section headers mitigate position effects; shuffling/deleting don't."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "Verbose order-lookup results (40+ fields, 5 relevant) fill the context. Best practice?",
        "o": [
          "Keep all fields; the model ignores extras for free.",
          "Raise max_tokens.",
          "Trim tool outputs to only relevant fields before they accumulate.",
          "Summarize the whole conversation each turn."
        ],
        "a": [
          2
        ],
        "e": "Trimming verbose outputs to relevant fields keeps context lean; unused fields still consume tokens."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "In a long exploration the agent gives inconsistent answers and cites 'typical patterns' instead of classes it found. Which counteract this? (Select 2)",
        "o": [
          "Disable subagents.",
          "Raise temperature.",
          "Maintain scratchpad files of key findings and reference them later.",
          "Use /compact to reduce verbose context."
        ],
        "a": [
          2,
          3
        ],
        "e": "Scratchpad files persist findings and /compact reduces bloat; higher temperature and no delegation don't help."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "A customer opens with 'Connect me to a human now.' Issue looks simple. Correct action?",
        "o": [
          "Ask verification questions, then escalate.",
          "Honor the explicit request and escalate immediately, without first investigating.",
          "Run sentiment analysis first.",
          "Resolve it since it's simple."
        ],
        "a": [
          1
        ],
        "e": "Explicit human requests are immediate escalation triggers."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Policy addresses only own-site price adjustments and is silent on competitor matching, which the customer requests. Action?",
        "o": [
          "Deny outright.",
          "Escalate, because policy is ambiguous/silent on this request.",
          "Approve to keep them happy.",
          "Decide alone after they prove the price."
        ],
        "a": [
          1
        ],
        "e": "Policy gaps/silence are escalation triggers, not agent judgment calls."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "get_customer returns multiple matches for the stated name. Best action?",
        "o": [
          "Escalate immediately.",
          "Select the first match.",
          "Select the most recently active account.",
          "Ask for additional identifiers rather than picking by heuristic."
        ],
        "a": [
          3
        ],
        "e": "Multiple matches require clarification via additional identifiers, not heuristic selection."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Two credible sources report different figures collected in different years. Prevent misreading as contradiction?",
        "o": [
          "Keep only the larger figure.",
          "Average them.",
          "Drop figures lacking a date.",
          "Require subagents to include publication/collection dates in structured outputs."
        ],
        "a": [
          3
        ],
        "e": "Requiring dates lets synthesis interpret temporal differences correctly."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Two sources genuinely conflict on a statistic. How should synthesis handle it?",
        "o": [
          "Drop both.",
          "Preserve both values with source attribution and separate well-established from contested findings.",
          "Average the values.",
          "Pick the first source."
        ],
        "a": [
          1
        ],
        "e": "Annotate conflicts with attribution rather than arbitrarily resolving them."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "Pipeline reports 97% overall accuracy; leadership wants to drop human review. Key risk and mitigation?",
        "o": [
          "Aggregate accuracy can mask weak segments; validate by document type/field and use stratified sampling before automating.",
          "Replace review with an identical second pass.",
          "Raise the global threshold to 99%.",
          "97% is universally safe."
        ],
        "a": [
          0
        ],
        "e": "High aggregates hide weak segments; segment analysis and stratified sampling validate readiness."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "Which extractions should be routed to human review to best use limited capacity?",
        "o": [
          "A fixed random 50%.",
          "Only the highest-confidence ones.",
          "Only very short documents.",
          "Low model-confidence or ambiguous/contradictory source documents."
        ],
        "a": [
          3
        ],
        "e": "Route low-confidence and ambiguous/contradictory cases to humans to concentrate capacity where errors are likely."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "For crash recovery in a long multi-agent exploration, best pattern?",
        "o": [
          "Each agent exports structured state; the coordinator loads a manifest on resume and injects it into prompts.",
          "Restart from scratch each time.",
          "Rely on the model to remember after a crash.",
          "Keep state only in the context window."
        ],
        "a": [
          0
        ],
        "e": "Structured state exports plus a coordinator-loaded manifest enable crash recovery."
      }
    ]
  }
];
