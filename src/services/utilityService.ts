import { generateReportHTML } from "../templates/utilityReportTemplate";
import { Result } from "../types/result";
import { parseFlows } from "../utils/parseutils";
import { validateFlows } from "./validateLogs";

export async function utilityReport(flows: any, sessionID: string) {
  //parse flows
  const parsedFlows = parseFlows(flows, sessionID);

  // Validate flows
  const validatedFlows: { flowId: string; results: Result }[] =
    await validateFlows(await parsedFlows);

  // Generate HTML report
  const htmlReport = generateReportHTML(validatedFlows);

  return htmlReport;
}
