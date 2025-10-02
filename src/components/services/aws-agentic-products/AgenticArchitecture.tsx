import Image from "next/image";

export const AgenticArchitecture = () => {
  const tools1 = ["Tool 1", "Tool 2", "Tool 3"];
  const tools2 = ["Tool 4", "Tool 5", "Tool 6"];

  return (
    <section className="bg-surface-2 py-20 px-5 rounded-4xl my-20">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-10">
          {/* Left Architecture */}
          <div className="flex items-center gap-8">
            {/* Agent Group */}
            <div className="flex flex-col items-center gap-4">
              <div className="text-xl font-medium text-transparent bg-gradient-to-r from-[#97F4BA] to-white bg-clip-text">
                Agent
              </div>
              <div className="bg-[#373636] border-2 border-dashed border-[#EDDDB6] rounded-4xl px-10 py-12 text-center text-2xl font-bold leading-[1.3] text-white">
                MCP
                <br />
                Client
              </div>
            </div>

            {/* MCP Path */}
            <div className="text-lg font-semibold text-white leading-[1.4]">
              /mcp
            </div>

            {/* AgentCore Gateway */}
            <div className="bg-app border-[4px] border-[#EDDDB6] rounded-4xl p-12 text-center text-3xl font-bold leading-[1.3] w-[280px] h-[500px] flex flex-col items-center justify-center gap-12">
              <span>
                AgentCore
                <br />
                Gateway
              </span>
              <div className="w-[100px] h-[110px]">
                <Image
                  src="/brain.svg"
                  alt="Gateway Icon"
                  className="w-full h-full object-contain"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          {/* Right Architecture */}
          <div className="flex flex-col gap-20">
            {/* API Target Group */}
            <div className="flex items-center gap-10">
              <div className="bg-app border-2 border-[#A6C8FA] rounded-xl px-6 py-[20px] text-lg font-semibold whitespace-nowrap">
                API Endpoint Target
              </div>
              <ToolList
                title="RESTful services with OpenAI Schema"
                tools={tools1}
              />
            </div>

            {/* Lambda Target Group */}
            <div className="flex items-center gap-10">
              <div className="bg-app border-2 border-[#97F4BA] rounded-xl px-6 py-[20px] text-lg font-semibold whitespace-nowrap text-center">
                AWS Lambda Target
              </div>
              <ToolList title="Lambda functions" tools={tools2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

function ToolList({ title, tools }: { title: string; tools: string[] }) {
  return (
    <div className="flex flex-col gap-6 w-[298px]">
      <h3 className="text-xl font-semibold text-center">{title}</h3>
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-[#373636] border border-[#BAE7EF] rounded-xl px-4 py-4 text-lg font-semibold text-center"
        >
          {tool}
        </div>
      ))}
    </div>
  );
}
