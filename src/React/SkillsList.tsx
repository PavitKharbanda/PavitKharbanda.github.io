import React, { useState } from "react";

const CategoryIcons: Record<string, JSX.Element> = {
  "Machine Learning & NLP": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
    </svg>
  ),
  "Data Engineering": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M3 13h18v2H3v-2zm0-6h12v2H3V7zm0 12h6v2H3v-2z" />
    </svg>
  ),
  "Systems & Backend": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M4 4h16v6H4zM4 14h16v6H4z" />
    </svg>
  ),
  "Tools & Cloud": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M20 8a6 6 0 10-11.33 2.09A5 5 0 006 15h14a3 3 0 000-6h-0z" />
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills: Record<string, string[]> = {
    "Machine Learning & NLP": [
      "PyTorch, scikit-learn, XGBoost",
      "NLP: LangChain, OpenAI API, NLTK, RAG",
      "Model dev: layoutLMv3, fine-tuning, evaluation (PSNR/SSIM)",
    ],
    "Data Engineering": [
      "Spark, Databricks, Delta Lake, BigQuery, Snowflake",
      "ETL: Spark & Pandas pipelines, S3, EMR, ThreadPoolExecutor",
      "Data ops: partitioning, Delta tables, SQL (Postgres, MSSQL)",
    ],
    "Systems & Backend": [
      "APIs & Backend: Flask, FastAPI, Express",
      "Deployment: Cloud Run, Kubernetes, Docker, multi-threaded ETL",
      "Realtime: async status tracking, JS polling, server-side parsing",
    ],
    "Tools & Cloud": [
      "AWS: EMR, EC2, S3, RDS",
      "Azure: Databricks, Data Lake, Fabric · GCP: BigQuery, Cloud Run",
      "Tools: Git, Docker, Kubernetes, Power BI, MongoDB, PostgreSQL, Tailwind",
    ],
    Experience: [
      "Software Developer — Ford Motor Company (Sep 2025–Dec 2025): Built Flask + BigQuery + Cloud Run dashboard; automated stability reporting and engineered multi-threaded ETL for 50k+ crash logs.",
      "Data Analyst — Ontario Ministry (May 2025–Aug 2025): Automated Databricks & Fabric pipelines; built NLP name-matching toolkit and unified 3TB+ datasets into Delta Lake.",
      "Data Eng Intern — HiLabs (Sep 2024–Dec 2024): Built ETL integrating Snowflake/S3/Postgres with Kubernetes, Spark & EMR; document processing with LayoutLMv3.",
      "Full Stack Developer — Bio Field Power (Jan 2024–Apr 2024): Built Next.js + Express platform with MongoDB and auth.",
      "Software Developer — Dataline Advertisers (May 2023–Aug 2023): Built mobile web app with Vue, TypeScript, Tailwind and payment integration.",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
