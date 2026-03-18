---
name: "Client Ad Creation"
description: "A specialized skill for creating high-converting Meta Ads for clients by combining client resources (transcripts, VSLs) with advanced advertising knowledge from NotebookLM."
---

# Client Ad Creation Skill

This skill allows Antigravity to generate replicable, high-performing advertising campaigns for any client using a systematic workflow that leverages specific knowledge bases stored in NotebookLM.

## 📋 Core Methodology: "The Tri-Angle Research"

Every client campaign must follow these steps to ensure quality and consistency:

### 1. Resource Ingestion
Identify and read the following resources in the client folder:
- `transcripciones/`: Conversations or interviews with the client.
- `vsl_scripts/`: Sales letter or video scripts.
- `oferta/`: Detailed breakdown of the services/products.
- `landing_page/`: Any existing high-converting pages.

### 2. Knowledge Base Querying (NotebookLM)
Query the following standard notebooks to apply the latest frameworks:
- **Creativity as Segmentation**: For building hooks that signal the algorithm.
- **Vertical Video Mastery**: For Reel/TikTok/Shorts script formatting.
- **Simplified Structure**: For campaign organization (Broad vs. Testing).
- **Data Infrastructure**: To ensure tracking (Pixel/CAPI) alignment.

### 3. Audience Segmentation
Define 3 distinct "Angles" or segments for the client. Example (Service Base):
- **B2B**: Business owners or decision makers.
- **B2C (Mass)**: General public needing the solution.
- **Specialized/Niche**: A specific segment with a unique pain point (e.g., 1099 Contractors).

### 4. Ad Generation Framework
For each angle, generate 5 variants using these frameworks:
- **Trope Stacking**: Using specific keywords in copy for AI recognition.
- **Direct Call-Out**: Identifying the user within the first 3 seconds.
- **Curiosity Gap**: Opening a loop that only the VSL or DM can close.
- **UGC Style**: Designing "Native" ads that don't look like ads.

---

## 🛠 Usage Instructions

### Step 1: Initialize
When a new client folder is entered, tell Antigravity: 
> "Inicia el proceso de creación de ads para este cliente usando el skill Client Ad Creation."

### Step 2: Context Gathering
Antigravity will:
1. List all files in the current folder.
2. Search for transcripts or copy documents.
3. Authenticate and list available NotebookLM notebooks.

### Step 3: Creation
Antigravity will create a directory `/ads/` and generate:
- `client_ads_main.md`: The full strategy.
- `angle_1_[name].md`: Specific Breakdown.
- `angle_2_[name].md`: Specific Breakdown.
- `angle_3_[name].md`: Specific Breakdown.

### Step 4: External Sync (Optional)
Antigravity can sync the final results to a Google Doc if a link is provided.

---

## 📈 KPIs and Quality Control
- **Hook Rate Target**: >35%
- **Compliance**: No illegal claims or guaranteed specific $ amounts.
- **CTA Diversity**: Always provide at least 2 CTA variants (e.g., VSL Learn More vs. Direct DM).

---

**Developed for:** Luchobranding | Antigravity AI  
**Version:** 1.0.0
