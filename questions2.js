/* CCAR-F practice bank — SET 2 (Latihan 2). 60 fresh questions, distinct from Set 1.
 * Same rules/format. answer = array of correct option indices; length>1 => multiple-response.
 */
const PACKAGES2 = [
  {
    "id": "F",
    "name": "Package F — Loops & Decision-Making",
    "desc": "Agentic loop internals, model-driven vs scripted control, handoffs, decomposition.",
    "questions": [
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "In the agentic loop, why must each tool's result be appended to the conversation history before the next request to Claude?",
        "o": [
          "So tool_choice switches automatically to 'any'.",
          "So the model can reason about the next action using the new information.",
          "So the API can bill the request correctly.",
          "So the loop can count iterations toward a cap."
        ],
        "a": [
          1
        ],
        "e": "Tool results are appended to context so the model incorporates new information into its reasoning for the next step. That is what makes the loop model-driven rather than scripted."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "Which of the following are anti-patterns for deciding when an agentic loop should stop? (Select 2)",
        "o": [
          "Parsing natural-language signals in the assistant's text to detect completion.",
          "Terminating when stop_reason is 'end_turn'.",
          "Using an arbitrary iteration cap as the primary stopping mechanism.",
          "Continuing while stop_reason is 'tool_use'."
        ],
        "a": [
          0,
          2
        ],
        "e": "Loop control should key off stop_reason ('tool_use' continue, 'end_turn' stop). Parsing NL completion signals or relying on an iteration cap as the primary stop are the documented anti-patterns."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "An agent must escalate a billing dispute to a human who has NO access to the conversation transcript. What should the handoff include?",
        "o": [
          "A structured summary: customer ID, root-cause analysis, refund amount, and recommended action.",
          "Just the customer's last message.",
          "A link to reopen the same session so the human can scroll the chat.",
          "The full raw token log of every tool call."
        ],
        "a": [
          0
        ],
        "e": "Mid-process escalation needs a structured handoff (customer ID, root cause, amounts, recommended action) because the human agent lacks the transcript."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "You must 'add comprehensive tests to a legacy codebase' — an open-ended task where dependencies are discovered along the way. Which decomposition strategy fits?",
        "o": [
          "Dynamic adaptive decomposition: map structure, identify high-impact areas, then build a prioritized plan that adapts as dependencies surface.",
          "A single prompt asking for all tests at once.",
          "A fixed sequential pipeline written entirely up front.",
          "Prompt chaining with a predetermined per-file order fixed in advance."
        ],
        "a": [
          0
        ],
        "e": "Open-ended investigation calls for dynamic decomposition that adapts to discoveries, not a rigid pre-planned pipeline."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A generic analyze_document tool is misused across tasks. Which refactor best improves reliability?",
        "o": [
          "Keep one tool but add a longer description.",
          "Split it into purpose-specific tools with defined I/O contracts: extract_data_points, summarize_content, verify_claim_against_source.",
          "Give every subagent the tool so one always has it.",
          "Set tool_choice: 'auto' whenever it's called."
        ],
        "a": [
          1
        ],
        "e": "Splitting a generic tool into purpose-specific tools with clear contracts reduces misrouting and clarifies selection."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Your root CLAUDE.md has grown huge and unwieldy. Which two techniques keep configuration modular and maintainable? (Select 2)",
        "o": [
          "Use @import to reference external standards files from CLAUDE.md.",
          "Move everything into ~/.claude/CLAUDE.md so it's shared.",
          "Duplicate the whole file into every subdirectory.",
          "Split topics into focused files under .claude/rules/ (e.g., testing.md, deployment.md)."
        ],
        "a": [
          0,
          3
        ],
        "e": "@import keeps CLAUDE.md modular, and .claude/rules/ organizes topic-specific files. User-level config isn't shared via VC; duplicating into every subdirectory is unmaintainable."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Reviewers get inconsistent severity labels. What most improves classification consistency?",
        "o": [
          "Increase max_tokens.",
          "Tell the model to 'use good judgment on severity'.",
          "Define explicit severity criteria with a concrete code example for each severity level.",
          "Ask for a numeric confidence with each label."
        ],
        "a": [
          2
        ],
        "e": "Explicit severity criteria anchored by concrete code examples per level produce consistent classification; vague instructions and confidence numbers don't."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Source documents format dates and units inconsistently (e.g., '3 lbs', '1.4kg', 'Mar 3 2026'). You already use a strict output schema. What else is needed for clean output?",
        "o": [
          "Nothing — a strict schema normalizes formats automatically.",
          "Include format-normalization rules in the prompt alongside the strict schema.",
          "Raise temperature so the model guesses formats.",
          "Switch to free-text output."
        ],
        "a": [
          1
        ],
        "e": "Strict schemas guarantee structure, not normalized values. Add explicit normalization rules in the prompt to handle inconsistent source formatting."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "A customer opens with 'Just connect me to a human right now.' The issue looks simple. What should the agent do?",
        "o": [
          "Run sentiment analysis before deciding.",
          "Honor the explicit request and escalate immediately, without first attempting investigation.",
          "Ask three verification questions first, then escalate.",
          "Ignore the request and resolve it since it's simple."
        ],
        "a": [
          1
        ],
        "e": "An explicit customer request for a human is an immediate escalation trigger — honor it without first attempting to investigate."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Two subagents pass findings to synthesis, but attribution is lost after summarization. Which requirement best preserves provenance for downstream synthesis?",
        "o": [
          "Store citations only in the coordinator's scratch memory.",
          "Ask subagents to summarize findings into a single paragraph to save tokens.",
          "Require subagents to output structured claim-source mappings (source URL/document name, relevant excerpt) that synthesis must preserve and merge.",
          "Let synthesis paraphrase claims freely."
        ],
        "a": [
          2
        ],
        "e": "Structured claim-source mappings preserved through synthesis prevent attribution loss during compression."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You want the agent to find every file matching **/*.test.tsx and, separately, to find every place a function name appears in file contents. Which tools?",
        "o": [
          "Glob for the filename pattern; Grep for the content search.",
          "Read for both.",
          "Grep for the filename pattern; Glob for the content search.",
          "Bash find for both."
        ],
        "a": [
          0
        ],
        "e": "Glob matches file-path patterns; Grep searches file contents for patterns like function names."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You're migrating a library across 45+ files, then implementing the planned changes. Which combined approach is recommended?",
        "o": [
          "Neither — just ask for the whole migration in one prompt.",
          "Direct execution throughout; plan mode is only for greenfield work.",
          "Use plan mode to investigate and design the migration, then direct execution to carry out the planned approach.",
          "Plan mode for everything, including each one-line edit."
        ],
        "a": [
          2
        ],
        "e": "Combine plan mode for the architectural investigation with direct execution for the well-understood implementation."
      }
    ]
  },
  {
    "id": "G",
    "name": "Package G — Coordination, Sessions & State",
    "desc": "Hub-and-spoke routing, AgentDefinition, resumption vs fresh start, crash recovery.",
    "questions": [
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "Why route all subagent communication through the coordinator in a hub-and-spoke design?",
        "o": [
          "For observability, consistent error handling, and controlled information flow.",
          "Because subagents cannot emit tool calls otherwise.",
          "To reduce the coordinator's token usage to zero.",
          "To let subagents inherit each other's full context automatically."
        ],
        "a": [
          0
        ],
        "e": "Central routing through the coordinator gives observability, consistent error handling, and controlled information flow across subagents."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "A broad research topic risks duplicated work across subagents. Which coordinator strategies reduce duplication and improve coverage? (Select 2)",
        "o": [
          "Run an iterative refinement loop: evaluate synthesis for gaps, re-delegate targeted queries, re-synthesize.",
          "Give all subagents the identical broad query.",
          "Always route every query through the full pipeline regardless of complexity.",
          "Partition scope so each subagent gets distinct subtopics or source types."
        ],
        "a": [
          0,
          3
        ],
        "e": "Partitioning scope minimizes duplication and iterative refinement fills coverage gaps. Always running the full pipeline or issuing identical broad queries wastes effort and causes overlap."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "When designing the coordinator's prompt for its subagents, which style best enables subagent adaptability?",
        "o": [
          "Specify research goals and quality criteria rather than rigid step-by-step procedures.",
          "Forbid subagents from using any tools.",
          "Provide only the topic with no goals or criteria.",
          "Give exact procedural steps for every subagent to follow verbatim."
        ],
        "a": [
          0
        ],
        "e": "Goal-and-criteria prompts let subagents adapt; overly procedural instructions constrain them and reduce quality on novel inputs."
      },
      {
        "d": 1,
        "s": "Developer Productivity with Claude",
        "q": "You want to compare two refactoring strategies from the SAME analyzed baseline, and also configure each subagent's identity and permitted tools. Which two mechanisms apply? (Select 2)",
        "o": [
          "AgentDefinition to set each subagent's description, system prompt, and tool restrictions.",
          "fork_session to branch independent explorations from a shared baseline.",
          "--resume to keep both strategies in one linear session.",
          "tool_choice: 'any' to duplicate the baseline."
        ],
        "a": [
          0,
          1
        ],
        "e": "fork_session branches from a shared baseline for divergent exploration; AgentDefinition configures each subagent's role and tool restrictions."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "You return to a long investigation after several files changed. Why is starting a fresh session with a structured summary often more reliable than resuming with the old session's tool results?",
        "o": [
          "Resuming can carry stale tool results; a fresh session with an injected summary avoids reasoning over outdated data.",
          "Resuming is not supported by Claude Code.",
          "Fresh sessions always run on a larger model.",
          "Summaries are billed at half price."
        ],
        "a": [
          0
        ],
        "e": "When prior tool results are stale, a new session seeded with a structured summary is more reliable than resuming; resume is best when prior context is mostly still valid."
      },
      {
        "d": 5,
        "s": "Developer Productivity with Claude",
        "q": "For crash recovery in a long multi-agent exploration, what is the recommended pattern?",
        "o": [
          "Each agent exports structured state to a known location; the coordinator loads a manifest on resume and injects it into agent prompts.",
          "Rely on the model to remember everything if it crashes.",
          "Store state only in the model's context window.",
          "Restart the whole workflow from scratch each time."
        ],
        "a": [
          0
        ],
        "e": "Structured state exports plus a coordinator-loaded manifest enable crash recovery by re-injecting prior state into agent prompts."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "A subagent hits a transient network blip mid-search but can recover on its own. What should it propagate to the coordinator?",
        "o": [
          "A generic 'failed' status regardless of recovery.",
          "An empty success to keep things moving.",
          "Nothing for the blip it recovered from; propagate only errors it cannot resolve locally, with partial results and what was attempted.",
          "Every transient blip, immediately, to the coordinator."
        ],
        "a": [
          2
        ],
        "e": "Subagents implement local recovery for transient failures and propagate only unresolved errors, including partial results and what was attempted."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You configured two MCP servers. Which statement about tool discovery is correct?",
        "o": [
          "MCP tools load lazily and only after the first failed built-in call.",
          "Project and user MCP servers cannot both be active.",
          "Tools from all configured MCP servers are discovered at connection time and available simultaneously.",
          "Only one MCP server can be active per session."
        ],
        "a": [
          2
        ],
        "e": "All configured MCP servers' tools are discovered at connection time and available to the agent simultaneously, including project- and user-scoped ones."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "A skill produces exploratory, verbose 'brainstorm alternatives' output you don't want polluting the main session, and you want to restrict it to file-write operations only. Which two frontmatter options apply? (Select 2)",
        "o": [
          "context: fork to run it in an isolated sub-agent context.",
          "allowed-tools to restrict the skill to specific tools.",
          "paths to make it always load.",
          "argument-hint to force the output into the main session."
        ],
        "a": [
          0,
          1
        ],
        "e": "context: fork isolates verbose/exploratory output; allowed-tools restricts which tools the skill may use. argument-hint prompts for parameters; paths is a rules-file feature."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You invoke a skill without arguments and want Claude to prompt you for the required parameter. Which frontmatter field enables that?",
        "o": [
          "paths.",
          "allowed-tools.",
          "context: fork.",
          "argument-hint."
        ],
        "a": [
          3
        ],
        "e": "argument-hint prompts developers for required parameters when a skill is invoked without arguments."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You must run extract_metadata FIRST, then perform enrichment in later turns. Which configuration guarantees the first tool runs?",
        "o": [
          "tool_choice: {type: 'tool', name: 'extract_metadata'} on the first turn, then continue in follow-up turns.",
          "tool_choice: 'any'.",
          "tool_choice: 'auto'.",
          "Put 'call extract_metadata first' only in the system prompt."
        ],
        "a": [
          0
        ],
        "e": "Forced tool selection guarantees a specific tool is called first; subsequent steps proceed in follow-up turns."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Synthesis produces a report but some topic areas had no available sources. How should the output represent this?",
        "o": [
          "Fabricate plausible content for the missing areas.",
          "Add coverage annotations indicating which findings are well-supported vs which areas have gaps due to unavailable sources.",
          "Silently omit the gap areas so the report looks complete.",
          "Fail the entire report because coverage is incomplete."
        ],
        "a": [
          1
        ],
        "e": "Structure synthesis with coverage annotations distinguishing well-supported findings from gap areas caused by unavailable sources — never hide or fabricate."
      }
    ]
  },
  {
    "id": "H",
    "name": "Package H — Escalation, Provenance & Review",
    "desc": "Policy gaps, temporal data, confidence calibration, independent verification passes.",
    "questions": [
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "A customer asks you to match a competitor's price. Your refund/adjustment policy only addresses adjustments on your own site and is silent on competitor matching. What is the correct action?",
        "o": [
          "Approve it to keep the customer happy.",
          "Deny it outright since the policy doesn't mention it.",
          "Ask the customer to prove the competitor's price, then decide alone.",
          "Escalate, because the policy is ambiguous/silent on this specific request."
        ],
        "a": [
          3
        ],
        "e": "Policy gaps/silence on the specific request are escalation triggers — not something the agent should resolve by guessing."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "A frustrated customer has a straightforward issue clearly within the agent's capability, but hasn't demanded a human. Best approach?",
        "o": [
          "Escalate immediately due to negative sentiment.",
          "Ignore the emotion and process silently.",
          "Acknowledge the frustration and offer to resolve it now; escalate only if the customer reiterates a preference for a human.",
          "Ask them to rate their frustration 1-10 first."
        ],
        "a": [
          2
        ],
        "e": "Acknowledge frustration while offering resolution when capable; escalate only if the customer reiterates the preference. Sentiment alone isn't a reliable escalation proxy."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "Two credible sources report different figures because they were collected in different years. Without dates, synthesis may treat them as contradictory. What requirement prevents this?",
        "o": [
          "Require subagents to include publication/collection dates in structured outputs so temporal differences aren't misread as contradictions.",
          "Always keep only the larger figure.",
          "Drop any figure lacking a date.",
          "Merge the two into an average."
        ],
        "a": [
          0
        ],
        "e": "Requiring publication/collection dates in structured outputs lets synthesis interpret temporal differences correctly rather than as conflicts."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "You want to safely reduce human review of high-confidence extractions over time. Which practices support this? (Select 2)",
        "o": [
          "Route the highest-confidence items to extra human review instead of the low-confidence ones.",
          "Trust the single aggregate accuracy number and stop reviewing entirely.",
          "Analyze accuracy by document type and field to confirm consistent performance across segments.",
          "Use stratified random sampling of high-confidence extractions to measure ongoing error rates and detect novel patterns."
        ],
        "a": [
          2,
          3
        ],
        "e": "Stratified sampling and per-segment accuracy analysis validate readiness before reducing review. Aggregate-only trust hides weak segments; you route LOW-confidence/ambiguous items to humans, not high-confidence ones."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "For calibrated review routing, what should the model output alongside each extracted field, and how are thresholds set?",
        "o": [
          "No scores; route everything to humans.",
          "A random score to spread review load evenly.",
          "A single overall confidence for the whole document, set by intuition.",
          "Field-level confidence scores, with review thresholds calibrated using a labeled validation set."
        ],
        "a": [
          3
        ],
        "e": "Field-level confidence scores calibrated against labeled validation data enable routing limited reviewer attention where it matters most."
      },
      {
        "d": 5,
        "s": "Structured Data Extraction",
        "q": "Which extractions should be routed to human review to best use limited reviewer capacity?",
        "o": [
          "A fixed random 50% of all extractions.",
          "Only documents shorter than one page.",
          "Only the highest-confidence extractions.",
          "Those with low model confidence or ambiguous/contradictory source documents."
        ],
        "a": [
          3
        ],
        "e": "Prioritize human review for low-confidence and ambiguous/contradictory cases; this concentrates reviewer capacity where errors are most likely."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Beyond an independent review instance, you want each finding tagged so reviewers can triage. Which verification-pass design helps?",
        "o": [
          "Have the model self-report a confidence level alongside each finding to enable calibrated review routing.",
          "Suppress all low-severity findings automatically.",
          "Merge all findings into one paragraph.",
          "Only report findings the model is 100% certain about."
        ],
        "a": [
          0
        ],
        "e": "A verification pass where the model reports confidence per finding supports calibrated routing of review attention."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Developers keep dismissing a certain category of finding. How can you systematically analyze which code constructs trigger false positives?",
        "o": [
          "Add a detected_pattern field to structured findings to track which constructs trigger them, then analyze dismissal patterns.",
          "Increase the model temperature.",
          "Turn off structured output.",
          "Ask developers to email you each time they dismiss one."
        ],
        "a": [
          0
        ],
        "e": "A detected_pattern field lets you correlate dismissals with specific code constructs and refine the prompt for those false-positive patterns."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "A message contains three separate concerns. Best decomposition approach before replying?",
        "o": [
          "Escalate because multiple concerns are out of scope.",
          "Answer the easiest one and close the ticket.",
          "Decompose into distinct items, investigate each in parallel using shared context, then synthesize one unified resolution.",
          "Combine them into one generic response."
        ],
        "a": [
          2
        ],
        "e": "Decompose multi-concern requests into distinct items, investigate each (in parallel where possible) with shared context, then synthesize a unified resolution."
      },
      {
        "d": 5,
        "s": "Customer Support Resolution Agent",
        "q": "Over a long chat, progressive summarization is condensing exact percentages and customer-stated expectations into vague phrases. Which risk does this illustrate and what's the fix?",
        "o": [
          "Progressive summarization loses precise values; extract transactional facts into a persistent case-facts block kept outside summarized history.",
          "The context window is too small; there is no fix.",
          "Summaries should be even shorter to save tokens.",
          "The model temperature is too low."
        ],
        "a": [
          0
        ],
        "e": "Progressive summarization risks condensing numbers/dates/expectations; persist them as a structured case-facts block included each turn, outside the summarized history."
      },
      {
        "d": 5,
        "s": "Multi-Agent Research System",
        "q": "A synthesis report mixes financial data, news, and technical findings. What rendering guidance produces the clearest output?",
        "o": [
          "Output all of it as one long paragraph.",
          "Drop whichever type is least common.",
          "Render each content type appropriately — financial data as tables, news as prose, technical findings as structured lists.",
          "Convert everything to a single uniform bullet format."
        ],
        "a": [
          2
        ],
        "e": "Render different content types in their natural form rather than forcing a uniform format, which loses clarity."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "Why is a second, independent Claude instance better than asking the generating session to self-review its own code?",
        "o": [
          "Independent instances never find issues, saving time.",
          "The independent instance is always a bigger model.",
          "The generating session retains reasoning context and is less likely to question its own decisions; an independent instance lacks that bias.",
          "Self-review is disallowed by the API."
        ],
        "a": [
          2
        ],
        "e": "Session context isolation matters: a fresh instance without the generator's reasoning context catches subtle issues that self-review tends to miss."
      }
    ]
  },
  {
    "id": "I",
    "name": "Package I — Tools, MCP & Built-ins II",
    "desc": "System-prompt keyword effects, constrained tools, error taxonomy, resources, scope.",
    "questions": [
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Your tool descriptions are well written, but a keyword in the system prompt keeps steering the model to the wrong tool. What should you review?",
        "o": [
          "The max_tokens setting.",
          "The system prompt for keyword-sensitive instructions that create unintended tool associations and can override good descriptions.",
          "The model's temperature only.",
          "Nothing — descriptions always win over the system prompt."
        ],
        "a": [
          1
        ],
        "e": "System-prompt wording can create keyword-sensitive tool associations that override well-written descriptions; review it for such phrasing."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "A generic fetch_url tool lets the agent pull arbitrary URLs, causing misuse. Which replacement best constrains behavior?",
        "o": [
          "Give fetch_url to more agents.",
          "Set tool_choice: 'auto' on fetch_url.",
          "Replace it with load_document that validates document URLs.",
          "Keep fetch_url but add 'be careful' to its description."
        ],
        "a": [
          2
        ],
        "e": "Replacing a generic tool with a constrained alternative (load_document that validates document URLs) prevents misuse better than prompt caveats."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "An MCP tool must tell the agent a failure occurred. Which mechanism and metadata are appropriate? (Select 2)",
        "o": [
          "Use the MCP isError flag to signal failure back to the agent.",
          "Always return HTTP 200 with an empty body.",
          "Return the same 'Operation failed' text for every error type.",
          "Return errorCategory (transient/validation/permission) and an isRetryable boolean."
        ],
        "a": [
          0,
          3
        ],
        "e": "The isError flag signals failure; structured metadata (category + isRetryable) lets the agent choose recovery. Uniform generic errors and silent empty successes block good decisions."
      },
      {
        "d": 2,
        "s": "Multi-Agent Research System",
        "q": "Why does returning structured metadata like isRetryable: false matter for a business-rule violation?",
        "o": [
          "It converts the error into a valid empty result.",
          "It forces the coordinator to terminate the workflow.",
          "It makes the tool call faster.",
          "It prevents the agent from wasting retry attempts on a non-retryable error and lets it explain the situation appropriately."
        ],
        "a": [
          3
        ],
        "e": "Distinguishing retryable from non-retryable via structured metadata prevents wasted retries and enables an appropriate, customer-friendly explanation."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You want agents to see available issue summaries and a documentation hierarchy without spending turns on exploratory tool calls. Which MCP feature fits, and what's the tools-vs-resources distinction?",
        "o": [
          "Expose them as MCP resources (content catalogs); tools are for actions, resources are for exposing content.",
          "Expose them as many small MCP tools, one per document.",
          "Use isError flags to list them.",
          "Put the entire catalog in the system prompt."
        ],
        "a": [
          0
        ],
        "e": "MCP resources expose content catalogs so agents gain visibility without exploratory tool calls; tools perform actions, resources expose content."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "The agent keeps choosing built-in Grep over a more capable custom MCP search tool. Best fix?",
        "o": [
          "Remove Grep from the toolset.",
          "Enhance the MCP tool's description to explain its capabilities and outputs in detail.",
          "Rename the MCP tool to start with 'a'.",
          "Force tool_choice: 'any' every turn."
        ],
        "a": [
          1
        ],
        "e": "Detailed MCP tool descriptions make the agent prefer the more capable tool over a built-in like Grep."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "You need a standard GitHub integration and a bespoke internal-approval integration. Which build-vs-buy split is recommended?",
        "o": [
          "Skip MCP and hardcode both in the prompt.",
          "Use an existing community MCP server for GitHub; build a custom server for the bespoke internal workflow.",
          "Use community servers for both.",
          "Build both custom for consistency."
        ],
        "a": [
          1
        ],
        "e": "Prefer community MCP servers for standard integrations; reserve custom servers for team-specific workflows."
      },
      {
        "d": 2,
        "s": "Developer Productivity with Claude",
        "q": "An Edit fails because the anchor text appears multiple times in the file. Which fallback is reliable?",
        "o": [
          "Read the full file, then Write the modified contents.",
          "Delete the file and recreate from memory.",
          "Use Glob to patch the line.",
          "Retry Edit repeatedly until it matches."
        ],
        "a": [
          0
        ],
        "e": "When Edit can't find unique anchor text, Read + Write is the reliable fallback for the modification."
      },
      {
        "d": 1,
        "s": "Customer Support Resolution Agent",
        "q": "Different MCP tools return statuses as Unix timestamps, ISO 8601 strings, and numeric codes, confusing the agent. Which pattern normalizes them deterministically before the model reasons over them?",
        "o": [
          "A note in the system prompt asking the model to expect mixed formats.",
          "Setting tool_choice: 'any'.",
          "A PostToolUse hook that normalizes heterogeneous formats before the model processes the results.",
          "Increasing max_tokens."
        ],
        "a": [
          2
        ],
        "e": "PostToolUse hooks intercept and normalize heterogeneous tool-result formats deterministically before the model sees them."
      },
      {
        "d": 2,
        "s": "Structured Data Extraction",
        "q": "A subagent query returns zero rows because there truly are no matches. How should this be reported vs a timeout?",
        "o": [
          "Report the empty result as a failure to be safe.",
          "Report both as generic failures.",
          "Report it as a valid empty result (successful query, no matches), distinct from an access failure like a timeout.",
          "Report the timeout as an empty success."
        ],
        "a": [
          2
        ],
        "e": "Valid empty results (no matches) must be distinguished from access failures (timeouts) so the coordinator makes correct recovery decisions."
      },
      {
        "d": 3,
        "s": "Developer Productivity with Claude",
        "q": "You want to verify which memory/config files Claude Code actually loaded because behavior seems inconsistent across sessions. Which command helps?",
        "o": [
          "/flag to list config files.",
          "/compact to reload them.",
          "/memory to see which memory files are loaded.",
          "--resume to reprint them."
        ],
        "a": [
          2
        ],
        "e": "/memory shows which memory files are loaded, helping diagnose inconsistent behavior from configuration-hierarchy issues."
      },
      {
        "d": 1,
        "s": "Multi-Agent Research System",
        "q": "When passing prior findings to a synthesis subagent, how should content and metadata be handled to preserve attribution?",
        "o": [
          "Concatenate everything into one plain string.",
          "Let the synthesis agent infer sources from wording.",
          "Send only the content and discard metadata to save tokens.",
          "Use structured data formats that separate content from metadata (source URLs, document names, page numbers)."
        ],
        "a": [
          3
        ],
        "e": "Structured formats separating content from metadata preserve attribution (source URLs, document names, page numbers) across agent handoffs."
      }
    ]
  },
  {
    "id": "J",
    "name": "Package J — Prompting, Output & CI II",
    "desc": "Few-shot judgment, tool_use semantics, batch SLA math, iteration patterns, CI context.",
    "questions": [
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "You want few-shot examples that teach the model to generalize judgment to novel ambiguous cases, not just memorize the shown cases. What should the examples include?",
        "o": [
          "20+ examples covering every case you can think of.",
          "One example with the answer only, no reasoning.",
          "Examples that contradict each other to force caution.",
          "2-4 targeted examples that show the reasoning for why one action was chosen over plausible alternatives."
        ],
        "a": [
          3
        ],
        "e": "A few targeted examples that expose the reasoning for choosing one action over alternatives help the model generalize to novel patterns."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Which statement about tool_use with strict JSON schemas is accurate?",
        "o": [
          "It eliminates both syntax and semantic errors.",
          "It guarantees the document contained every required field.",
          "It eliminates JSON syntax errors but not semantic errors like values in the wrong field or line items that don't sum.",
          "It removes the need for any validation."
        ],
        "a": [
          2
        ],
        "e": "Strict schemas via tool_use eliminate syntax errors but not semantic ones (wrong-field values, non-summing totals), which still need validation."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "The batch processing window is up to 24 hours and you must guarantee a 30-hour end-to-end SLA. What submission cadence achieves it?",
        "o": [
          "Submit synchronously to bypass the SLA.",
          "Submit only after the previous batch fully completes.",
          "Submit on ~4-hour windows so worst-case 24h processing still lands within the 30h SLA.",
          "Submit once per day at midnight only."
        ],
        "a": [
          2
        ],
        "e": "With up to 24h processing, submitting on ~4-hour windows keeps worst-case completion within a 30-hour SLA — the guide's batch-cadence calculation."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "A batch of documents partially fails: some exceeded context limits. Best handling? (Select 2)",
        "o": [
          "Resubmit the entire batch from scratch.",
          "Resubmit only the failed documents, identified by custom_id.",
          "Chunk the oversized documents before resubmitting.",
          "Mark the failed documents as successful empties."
        ],
        "a": [
          1,
          2
        ],
        "e": "Resubmit only failed items (via custom_id) and apply fixes like chunking oversized documents. Reprocessing everything wastes cost; masking failures as success loses data."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "Before batch-processing 10,000 documents, what reduces resubmission cost the most?",
        "o": [
          "Use the synchronous API for all 10,000.",
          "Skip validation to speed things up.",
          "Submit all 10,000 immediately and fix issues afterward.",
          "Refine the prompt on a small sample first to maximize first-pass success."
        ],
        "a": [
          3
        ],
        "e": "Refining the prompt on a sample set before the full batch maximizes first-pass success and cuts iterative resubmission cost."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "Prose descriptions of a data transformation keep being interpreted inconsistently. What communicates the expected transformation most effectively?",
        "o": [
          "Lower the temperature and resend the same prose.",
          "Rewrite the prose to be longer and more detailed.",
          "Provide 2-3 concrete input/output examples of the transformation.",
          "Add 'be precise' to the instructions."
        ],
        "a": [
          2
        ],
        "e": "Concrete input/output examples are the most effective way to communicate a transformation when prose is interpreted inconsistently."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "You have several bugs to fix. When should you send them all in one detailed message vs fix them one at a time?",
        "o": [
          "Always sequential, one bug per message.",
          "It never matters how they're grouped.",
          "Always one message, regardless of interaction.",
          "One message when the fixes interact; sequential iteration when the problems are independent."
        ],
        "a": [
          3
        ],
        "e": "Address interacting problems together in one detailed message; handle independent problems sequentially."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "Your CI re-runs code review after each new commit and keeps posting duplicate comments for issues already flagged. What should you do?",
        "o": [
          "Switch the review to the Message Batches API.",
          "Post all comments every time and let developers filter.",
          "Include prior review findings in context and instruct Claude to report only new or still-unaddressed issues.",
          "Disable review after the first commit."
        ],
        "a": [
          2
        ],
        "e": "Passing prior findings and instructing Claude to report only new/unaddressed issues avoids duplicate comments across re-runs."
      },
      {
        "d": 3,
        "s": "Claude Code for Continuous Integration",
        "q": "Automated test generation keeps proposing scenarios already covered by the existing suite. Which two practices improve quality? (Select 2)",
        "o": [
          "Run generation with -p so it can't see existing tests.",
          "Provide the existing test files in context so it avoids duplicate scenarios.",
          "Ask for as many tests as possible regardless of overlap.",
          "Document testing standards, valuable-test criteria, and available fixtures in CLAUDE.md."
        ],
        "a": [
          1,
          3
        ],
        "e": "Providing existing tests prevents duplicates, and documenting standards/fixtures in CLAUDE.md raises test-generation quality. Maximizing count or hiding existing tests hurts quality."
      },
      {
        "d": 4,
        "s": "Claude Code for Continuous Integration",
        "q": "A review category has such a high false-positive rate that developers now distrust all findings. Recommended near-term action?",
        "o": [
          "Delete the whole review pipeline.",
          "Temporarily disable that category to restore trust while you improve its prompt.",
          "Raise the global confidence threshold for every category.",
          "Leave it on but add 'only high-confidence findings'."
        ],
        "a": [
          1
        ],
        "e": "High-false-positive categories erode trust in accurate ones; disable the offending category temporarily while refining its criteria."
      },
      {
        "d": 3,
        "s": "Code Generation with Claude Code",
        "q": "During a multi-phase task, the discovery phase floods context with verbose output and threatens context exhaustion. Which mechanism isolates that and returns a summary to the main conversation?",
        "o": [
          "Increase max_tokens and keep everything in the main context.",
          "Use the Explore subagent for the verbose discovery phase.",
          "Turn off tool use during discovery.",
          "Switch to direct execution."
        ],
        "a": [
          1
        ],
        "e": "The Explore subagent isolates verbose discovery output and returns a summary, preserving main-conversation context during multi-phase work."
      },
      {
        "d": 4,
        "s": "Structured Data Extraction",
        "q": "A required field extracted empty because the model couldn't parse an unusual document layout, though the value IS present. Which fix most directly helps?",
        "o": [
          "Raise temperature to encourage guessing.",
          "Add few-shot examples showing correct extraction from that varied document structure.",
          "Retry with the identical prompt repeatedly.",
          "Mark the field optional so empty is acceptable."
        ],
        "a": [
          1
        ],
        "e": "When the value exists but the layout varies, few-shot examples demonstrating extraction from that structure address empty/null extraction of present fields."
      }
    ]
  }
];
