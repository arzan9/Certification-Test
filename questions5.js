/* CCAR-F practice bank — SET 5 (Latihan 5). 60 fresh questions, distinct wording. */
const PACKAGES5 = [
  {
    "id": "U",
    "name": "Package U — Agentic Control & Enforcement",
    "questions": [
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Which single statement correctly describes agentic loop termination?",
        "o": [
          "Terminate whenever the assistant emits any text.",
          "Terminate at a fixed 5-iteration cap.",
          "Continue while stop_reason is 'tool_use'; terminate when it is 'end_turn'.",
          "Terminate when a tool returns an error."
        ],
        "a": [
          2
        ],
        "e": "Loop control keys off stop_reason: continue on 'tool_use', stop on 'end_turn'."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "In 12% of cases the agent skips get_customer and looks up orders by name, causing wrong refunds. Most effective fix?",
        "o": [
          "A mandatory-verification system prompt line.",
          "A routing classifier enabling per-request tool subsets.",
          "A programmatic prerequisite blocking lookup_order and process_refund until get_customer returns a verified ID.",
          "Few-shot examples of correct ordering."
        ],
        "a": [
          2
        ],
        "e": "Critical ordering needs deterministic programmatic enforcement, not probabilistic prompting or tool-availability changes."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Business rule: never auto-refund over $500. Which mechanism guarantees it?",
        "o": [
          "A prompt reminder.",
          "Temperature 0.",
          "A tool-call interception hook blocking refunds over $500 and redirecting to escalation.",
          "A PostToolUse summarizing hook."
        ],
        "a": [
          2
        ],
        "e": "Outgoing tool-call interception hooks enforce hard limits deterministically."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Tools return statuses in mixed formats (epoch vs ISO 8601), confusing reasoning. Which hook normalizes before the model sees results?",
        "o": [
          "A pre-request prompt note.",
          "tool_choice: 'any'.",
          "A PostToolUse hook.",
          "A larger context window."
        ],
        "a": [
          2
        ],
        "e": "PostToolUse hooks normalize heterogeneous tool results before the model processes them."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "Reports miss music, writing, and film. The coordinator log shows it decomposed 'creative industries' into digital art, graphic design, and photography. Each subagent succeeded. Root cause?",
        "o": [
          "Document analysis filtered non-visual sources.",
          "Synthesis lacks coverage-gap detection.",
          "Web search queries were too narrow.",
          "The coordinator's task decomposition is too narrow, so assignments miss whole domains."
        ],
        "a": [
          3
        ],
        "e": "The coordinator only assigned visual-arts subtopics; subagents executed their scope correctly."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "A coordinator runs the full four-subagent pipeline even for trivial queries. Better design?",
        "o": [
          "Give all subagents every tool.",
          "Analyze query requirements and dynamically select only the needed subagents.",
          "Remove the coordinator.",
          "Always run the full pipeline."
        ],
        "a": [
          1
        ],
        "e": "Dynamically select subagents by query complexity instead of always running the full pipeline."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "To reduce latency you want two subagents to run concurrently. How?",
        "o": [
          "Raise max_tokens.",
          "Set tool_choice: 'any'.",
          "Emit multiple Task tool calls in one coordinator response.",
          "One Task call per turn across turns."
        ],
        "a": [
          2
        ],
        "e": "Multiple Task calls in a single response spawn subagents in parallel."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "For a predictable multi-aspect review vs an open-ended investigation, which decomposition each? (Select 2)",
        "o": [
          "Dynamic adaptive decomposition for the open-ended investigation.",
          "Prompt chaining (fixed passes) for the predictable multi-aspect review.",
          "Prompt chaining for the open-ended investigation.",
          "Dynamic decomposition for the fully predictable pipeline."
        ],
        "a": [
          0,
          1
        ],
        "e": "Fixed chaining for predictable work; dynamic decomposition for open-ended investigation."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Escalating to a human without transcript access. Handoff must include what?",
        "o": [
          "The customer's name only.",
          "Customer ID, root cause, refund amount, recommended action.",
          "Nothing; the human reopens the session.",
          "The raw tool log."
        ],
        "a": [
          1
        ],
        "e": "Structured handoffs give the human the facts they lack from the transcript."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "Coordinator prompts to subagents should specify what to maximize adaptability?",
        "o": [
          "Research goals and quality criteria, not rigid step-by-step procedures.",
          "A ban on tool use.",
          "Exact verbatim steps.",
          "Only the raw topic."
        ],
        "a": [
          0
        ],
        "e": "Goal-and-criteria prompts enable subagent adaptability."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "A coordinator must invoke subagents. What must its config include?",
        "o": [
          "All built-in tools disabled.",
          "tool_choice: 'any'.",
          "'Task' in allowedTools.",
          "Plan mode enabled."
        ],
        "a": [
          2
        ],
        "e": "Spawning subagents via the Task tool requires 'Task' in allowedTools."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Some topic areas had no sources. How should the synthesis output handle it?",
        "o": [
          "Fabricate content for gaps.",
          "Add coverage annotations distinguishing well-supported findings from gaps.",
          "Fail the entire report.",
          "Silently omit gaps."
        ],
        "a": [
          1
        ],
        "e": "Coverage annotations surface gaps honestly instead of hiding or fabricating."
      }
    ]
  },
  {
    "id": "V",
    "name": "Package V — Tool Interfaces & Errors",
    "questions": [
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Two tools with minimal descriptions ('Retrieves customer information' / 'Retrieves order details') get misrouted. Best first step?",
        "o": [
          "Add 5-8 few-shot examples.",
          "Build a keyword routing layer.",
          "Consolidate into one tool.",
          "Expand each description with input formats, example queries, edge cases, and boundaries vs similar tools."
        ],
        "a": [
          3
        ],
        "e": "Descriptions are the primary selection mechanism; enriching them is the first, high-leverage fix."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "A generic analyze_document is overloaded. Best refactor?",
        "o": [
          "Force tool_choice: 'auto'.",
          "Give it to more agents.",
          "Split into extract_data_points, summarize_content, and verify_claim_against_source with defined contracts.",
          "Keep it and lengthen the description."
        ],
        "a": [
          2
        ],
        "e": "Split a generic tool into purpose-specific tools with clear I/O contracts."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "An agent has 18 tools and misselects. Fix?",
        "o": [
          "Scope each agent to the 4-5 tools its role needs.",
          "Add more tools.",
          "tool_choice: 'auto'.",
          "Number the tools."
        ],
        "a": [
          0
        ],
        "e": "Too many tools degrade selection; scope to role-relevant tools."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A synthesis agent keeps attempting web searches. Best remedy?",
        "o": [
          "Add a prompt note.",
          "Give it more search tools.",
          "Lower temperature.",
          "Restrict its tools to synthesis-relevant ones to prevent cross-specialization misuse."
        ],
        "a": [
          3
        ],
        "e": "Scope tools to the role; out-of-specialization tools get misused."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A subagent needs simple fact checks 85% of the time but round-trips through the coordinator, adding latency. Best fix?",
        "o": [
          "A scoped verify_fact tool for simple lookups; keep complex checks routed through the coordinator.",
          "Speculative caching.",
          "Give it all search tools.",
          "Batch checks to the end."
        ],
        "a": [
          0
        ],
        "e": "Least privilege: scope a verify_fact tool for the common case; keep complex cases in the coordinator pattern."
      },
      {
        "d": 2,
        "s": "Customer Support Resolution Agent",
        "q": "An MCP tool must report a failure so the agent can recover. Which are appropriate? (Select 2)",
        "o": [
          "Set the isError flag.",
          "Silently return an empty success.",
          "Return a uniform 'Operation failed' for everything.",
          "Return errorCategory and isRetryable metadata."
        ],
        "a": [
          0,
          3
        ],
        "e": "isError plus structured metadata (category, isRetryable) enables recovery; uniform/silent responses block it."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A search returns zero rows because nothing matched. Report it how vs a timeout?",
        "o": [
          "The timeout as empty success.",
          "The empty result as a failure.",
          "As a valid empty result, distinct from an access failure like a timeout.",
          "Both as generic failures."
        ],
        "a": [
          2
        ],
        "e": "Distinguish valid empty results from access failures for correct recovery."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Standard GitHub integration plus a bespoke internal workflow. Build-vs-buy?",
        "o": [
          "Community for both.",
          "Community MCP server for GitHub; custom server for the internal workflow.",
          "Skip MCP; hardcode.",
          "Build both custom."
        ],
        "a": [
          1
        ],
        "e": "Community servers for standard integrations; custom for team-specific needs."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Give agents visibility into available issue summaries and doc hierarchies without exploratory calls. Which MCP concept?",
        "o": [
          "MCP tools, one per document.",
          "System prompt listing.",
          "MCP resources (content catalogs).",
          "isError flags."
        ],
        "a": [
          2
        ],
        "e": "MCP resources expose content catalogs; tools are for actions."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Edit fails on non-unique anchor text. Reliable fallback?",
        "o": [
          "Use Glob to patch.",
          "Delete and recreate the file.",
          "Retry Edit with a shorter anchor.",
          "Read the full file, then Write the modified contents."
        ],
        "a": [
          3
        ],
        "e": "Read + Write is the reliable fallback when Edit can't find a unique anchor."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "System-prompt wording keeps steering to the wrong tool despite good descriptions. What to review?",
        "o": [
          "Nothing.",
          "Only temperature.",
          "The system prompt for keyword-sensitive instructions overriding descriptions.",
          "Only max_tokens."
        ],
        "a": [
          2
        ],
        "e": "Keyword-sensitive system-prompt phrasing can override good tool descriptions."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "Agent prefers built-in Grep over a more capable MCP search tool. Best fix?",
        "o": [
          "Enhance the MCP tool description to detail capabilities and outputs.",
          "Force tool_choice: 'any'.",
          "Remove Grep.",
          "Rename to start with 'a'."
        ],
        "a": [
          0
        ],
        "e": "Detailed MCP descriptions make the agent prefer the more capable tool."
      }
    ]
  },
  {
    "id": "W",
    "name": "Package W — Config Hierarchy & CI",
    "questions": [
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A /review command must be available to all developers on clone/pull. Where?",
        "o": [
          "A .claude/config.json commands array.",
          "Root CLAUDE.md.",
          "~/.claude/commands/ per developer.",
          ".claude/commands/ in the project repo."
        ],
        "a": [
          3
        ],
        "e": "Project-scoped commands in .claude/commands/ are shared via version control."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A new teammate's Claude ignores standards kept in seniors' ~/.claude/CLAUDE.md. Fix?",
        "o": [
          "Wait for the repo to sync user config.",
          "Run /compact.",
          "Duplicate into subdirectories.",
          "Move them to project-level .claude/CLAUDE.md so every clone gets them."
        ],
        "a": [
          3
        ],
        "e": "User-level config isn't shared via VC; project-level is the shared layer."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Test files scattered next to sources must follow one convention automatically. Best mechanism?",
        "o": [
          ".claude/rules/ with glob frontmatter like paths:['**/*.test.tsx'].",
          "A CLAUDE.md per subdirectory.",
          "Root CLAUDE.md headers relying on inference.",
          "A skill per code type."
        ],
        "a": [
          0
        ],
        "e": "Glob-scoped rules apply by path regardless of directory."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Keep a big CLAUDE.md modular, including only relevant standards per package. Which syntax?",
        "o": [
          "<<include>>.",
          "@import to reference external standards files.",
          "tool_choice: 'any'.",
          "A .mcp.json entry."
        ],
        "a": [
          1
        ],
        "e": "@import keeps CLAUDE.md modular by referencing external files."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Isolate a verbose codebase-analysis skill from the main conversation. Which frontmatter?",
        "o": [
          "allowed-tools.",
          "context: fork.",
          "paths.",
          "argument-hint."
        ],
        "a": [
          1
        ],
        "e": "context: fork isolates the skill in a sub-agent context."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Skill vs CLAUDE.md — when to choose a skill?",
        "o": [
          "They're identical.",
          "Always skills.",
          "Always CLAUDE.md.",
          "For on-demand, task-specific workflows; CLAUDE.md for always-loaded standards."
        ],
        "a": [
          3
        ],
        "e": "Skills are on-demand and task-specific; CLAUDE.md is always-loaded universal standards."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Restructure a monolith into microservices across dozens of files with multiple valid designs. Approach?",
        "o": [
          "Direct execution, switching later if needed.",
          "Enter plan mode to explore and design before changing code.",
          "Direct execution, discovering boundaries as you go.",
          "Direct execution with exhaustive instructions."
        ],
        "a": [
          1
        ],
        "e": "Architectural, multi-approach, large-scale work is the plan-mode case."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Adding one date-validation conditional to a single function. Approach?",
        "o": [
          "Explore subagent first.",
          "Multi-agent pipeline.",
          "Plan mode.",
          "Direct execution — small, well-scoped change."
        ],
        "a": [
          3
        ],
        "e": "Small well-scoped changes suit direct execution."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "A CI job hangs waiting for interactive input. Fix?",
        "o": [
          "Add -p (--print) for non-interactive mode.",
          "Set CLAUDE_HEADLESS=true.",
          "Redirect stdin from /dev/null.",
          "Add --batch."
        ],
        "a": [
          0
        ],
        "e": "-p / --print runs non-interactively and exits."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "CI must post machine-parseable inline PR comments. Flags?",
        "o": [
          "--batch --custom_id.",
          "--interactive --verbose.",
          "--pretty --markdown.",
          "--output-format json with --json-schema."
        ],
        "a": [
          3
        ],
        "e": "--output-format json plus --json-schema produce parseable structured findings."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "Re-running review per commit posts duplicate comments. Fix?",
        "o": [
          "Include prior findings and instruct Claude to report only new/unaddressed issues.",
          "Switch to the Batches API.",
          "Disable review after the first commit.",
          "Post everything; let developers filter."
        ],
        "a": [
          0
        ],
        "e": "Prior findings plus 'report only new/unaddressed' avoids duplicates."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Which command diagnoses which memory files are loaded when behavior is inconsistent?",
        "o": [
          "--resume.",
          "/memory.",
          "/flag.",
          "/compact."
        ],
        "a": [
          1
        ],
        "e": "/memory shows loaded memory files to diagnose hierarchy issues."
      }
    ]
  },
  {
    "id": "X",
    "name": "Package X — Prompting, Output & Batch",
    "questions": [
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Vague 'check that comments are accurate' floods false positives. Best precision fix?",
        "o": [
          "Confidence threshold at 8/10.",
          "Explicit criteria: flag a comment only when its claimed behavior contradicts actual code behavior.",
          "Bigger context window.",
          "Add 'be conservative'."
        ],
        "a": [
          1
        ],
        "e": "Specific categorical criteria beat vague instructions and confidence thresholds."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Detailed prose still gives inconsistent output format. Most reliable technique?",
        "o": [
          "tool_choice: 'auto'.",
          "Increase max_tokens.",
          "Add 'be consistent'.",
          "Add 2-4 few-shot examples showing the exact format."
        ],
        "a": [
          3
        ],
        "e": "Few-shot examples are the most effective route to consistent, actionable output."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Guaranteed schema-compliant output with zero JSON syntax errors. Best approach?",
        "o": [
          "Temperature 0.",
          "tool_use with a JSON schema.",
          "Prose 'return valid JSON only'.",
          "Regex extraction from free text."
        ],
        "a": [
          1
        ],
        "e": "tool_use with a JSON schema is most reliable and removes syntax errors."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "What do strict schemas via tool use NOT prevent?",
        "o": [
          "JSON syntax errors.",
          "Malformed brackets.",
          "Semantic errors like wrong-field values or non-summing totals.",
          "Trailing commas."
        ],
        "a": [
          2
        ],
        "e": "Strict schemas fix syntax, not semantics."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Documents sometimes lack a field and the model fabricates. Best schema fix?",
        "o": [
          "Mark all required.",
          "Add 'don't hallucinate' prose.",
          "Make those fields optional/nullable so the model returns null.",
          "Retry until filled."
        ],
        "a": [
          2
        ],
        "e": "Nullable/optional fields stop fabrication for absent data."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "An extensible category with new values and some unclear cases. Best design?",
        "o": [
          "Fixed enum forcing closest value.",
          "Free text.",
          "Enum + 'other' + detail, plus an 'unclear' value.",
          "Required, no null."
        ],
        "a": [
          2
        ],
        "e": "Enum + 'other'+detail extends; 'unclear' handles ambiguity."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Catch invoices whose line items don't sum to the stated total. Best design?",
        "o": [
          "Trust the strict schema.",
          "Mark total required.",
          "Extract calculated_total alongside stated_total; flag discrepancies with a conflict_detected boolean.",
          "Lower temperature."
        ],
        "a": [
          2
        ],
        "e": "Semantic mismatches aren't caught by schemas; emit both totals plus a conflict flag."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Batch window up to 24h; must guarantee a 30h SLA. Cadence?",
        "o": [
          "Synchronously.",
          "Once daily at midnight.",
          "Only after the previous batch completes.",
          "Submit on ~4-hour windows."
        ],
        "a": [
          3
        ],
        "e": "~4-hour windows keep worst-case 24h completion within 30h."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "A batch partially fails (some exceeded context limits). Best handling? (Select 2)",
        "o": [
          "Mark failures as empty successes.",
          "Resubmit the whole batch.",
          "Chunk oversized documents before resubmitting.",
          "Resubmit only failed documents by custom_id."
        ],
        "a": [
          2,
          3
        ],
        "e": "Resubmit only failed items with fixes like chunking; don't reprocess all or mask failures."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Which few-shot design best generalizes to novel ambiguous cases?",
        "o": [
          "Contradictory examples.",
          "20+ exhaustive examples.",
          "One example, answer only.",
          "2-4 examples showing the reasoning for choosing one action over alternatives."
        ],
        "a": [
          3
        ],
        "e": "A few reasoning-rich examples generalize better than exhaustive or answer-only ones."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "One category's false positives make developers ignore all findings. Near-term action?",
        "o": [
          "Raise a global confidence threshold.",
          "Delete the pipeline.",
          "Add 'only high-confidence findings'.",
          "Temporarily disable that category while improving its prompt."
        ],
        "a": [
          3
        ],
        "e": "Disable the offending category temporarily to restore trust while refining criteria."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Test-driven iteration for an ambiguous transformation. Recommended flow?",
        "o": [
          "Write tests covering behavior, edge cases, and performance first, then iterate by sharing test failures.",
          "Only test the happy path.",
          "Skip tests; use prose.",
          "Implement first, add tests later."
        ],
        "a": [
          0
        ],
        "e": "Write tests first, then iterate by sharing failures to guide progressive improvement."
      }
    ]
  },
  {
    "id": "Y",
    "name": "Package Y — Context, Escalation & Provenance",
    "questions": [
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Long chat: summarization drops exact refund amounts and dates. Best mitigation?",
        "o": [
          "Ask the model to remember numbers.",
          "Resend the full transcript each turn.",
          "Increase max_tokens.",
          "Persist transactional facts in a case-facts block included each prompt, outside summarized history."
        ],
        "a": [
          3
        ],
        "e": "A structured case-facts block preserves precise values across summarization."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Middle findings get dropped from a long aggregated input. Which mitigations? (Select 2)",
        "o": [
          "Shuffle findings randomly.",
          "Put a key-findings summary at the beginning.",
          "Use explicit section headers.",
          "Delete half the findings."
        ],
        "a": [
          1,
          2
        ],
        "e": "Leading summary and section headers mitigate lost-in-the-middle."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "Verbose order lookups (40+ fields, 5 relevant) fill context. Best practice?",
        "o": [
          "Raise max_tokens.",
          "Trim outputs to relevant fields before they accumulate.",
          "Keep all fields.",
          "Summarize the whole chat each turn."
        ],
        "a": [
          1
        ],
        "e": "Trim verbose outputs to relevant fields to conserve context."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "Extended exploration: the agent gives inconsistent answers citing 'typical patterns'. Which counteract this? (Select 2)",
        "o": [
          "Maintain scratchpad files of key findings and reference them.",
          "Raise temperature.",
          "Disable subagents.",
          "Use /compact to reduce verbose context."
        ],
        "a": [
          0,
          3
        ],
        "e": "Scratchpad files and /compact counteract context degradation."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Customer says 'Connect me to a human now' on a simple issue. Action?",
        "o": [
          "Honor it and escalate immediately without investigating first.",
          "Resolve it since it's simple.",
          "Run sentiment analysis.",
          "Ask verification questions first."
        ],
        "a": [
          0
        ],
        "e": "Explicit human requests are immediate escalation triggers."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Policy covers only own-site adjustments; customer asks competitor price matching. Action?",
        "o": [
          "Decide alone after proof.",
          "Escalate — policy is silent/ambiguous on this request.",
          "Approve to please them.",
          "Deny outright."
        ],
        "a": [
          1
        ],
        "e": "Policy gaps are escalation triggers."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "get_customer returns multiple matches for the name. Action?",
        "o": [
          "Pick the most recent account.",
          "Pick the first.",
          "Escalate immediately.",
          "Ask for additional identifiers rather than heuristic selection."
        ],
        "a": [
          3
        ],
        "e": "Multiple matches require clarification, not heuristics."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Two credible sources differ because collected in different years. Prevent misreading as contradiction?",
        "o": [
          "Require publication/collection dates in structured outputs.",
          "Average them.",
          "Keep the larger figure.",
          "Drop undated figures."
        ],
        "a": [
          0
        ],
        "e": "Dates let synthesis interpret temporal differences correctly."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Two sources genuinely conflict on a statistic. Synthesis should?",
        "o": [
          "Average them.",
          "Preserve both with source attribution and separate well-established from contested findings.",
          "Drop both.",
          "Pick the first."
        ],
        "a": [
          1
        ],
        "e": "Annotate conflicts with attribution rather than arbitrarily resolving."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Downstream agents have small context budgets. Upstream agents should return?",
        "o": [
          "Full reasoning transcripts.",
          "Raw tool dumps.",
          "Structured data (key facts, citations, relevance scores), not verbose reasoning chains.",
          "Nothing."
        ],
        "a": [
          2
        ],
        "e": "Return structured data when downstream budgets are limited."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "97% overall accuracy; leadership wants to cut human review. Risk and mitigation?",
        "o": [
          "Replace review with an identical pass.",
          "Raise the threshold to 99%.",
          "Aggregates can mask weak segments; validate by document type/field and use stratified sampling first.",
          "97% is universally safe."
        ],
        "a": [
          2
        ],
        "e": "Segment analysis and stratified sampling validate readiness before automating."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "Which extractions best use limited human-review capacity?",
        "o": [
          "Only the highest-confidence.",
          "Only short documents.",
          "A random 50%.",
          "Low-confidence or ambiguous/contradictory source documents."
        ],
        "a": [
          3
        ],
        "e": "Route low-confidence/ambiguous cases to humans to concentrate capacity where errors are likely."
      }
    ]
  }
];
