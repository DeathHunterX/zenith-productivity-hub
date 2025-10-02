import { planData } from "@/common/data/plan";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";

const PlanningSection = () => {
    return (
        <div className="max-6xl mx-auto space-y-6">
            {planData.map((plan) => (
                <PlanCard plan={plan} key={plan.id} />
            ))}
        </div>
    );
};

const PlanCard = ({ plan }: { plan: (typeof planData)[0] }) => {
    return (
        <div className="bg-white dark:bg-muted-foreground/7 rounded-xl shadow border flex flex-col md:flex-row overflow-hidden">
            <span
                className="bg-gray-800 text-xs px-2 py-2 rounded-r-md uppercase font-semibold md:[writing-mode:vertical-rl] md:rotate-180"
                style={{
                    textOrientation: "mixed",
                    textAlign: "center",
                }}
            >
                {plan.tag}
            </span>
            <div className="flex flex-col md:flex-row size-full">
                <div className=" dark:bg-gray-900 dark:text-white items-center p-6 md:w-1/3 relative space-y-1">
                    <div className="flex items-center gap-4">
                        <h5 className="font-semibold">{plan.name}</h5>

                        {plan.tag === "Most Popular" && <Badge>Popular</Badge>}
                    </div>
                    <span className="text-muted-foreground">
                        Good tools made affordable
                    </span>

                    <h2 className="font-bold my-2">${plan.price}</h2>

                    <p className="text-sm">{plan.note}</p>

                    <Button
                        className={cn(
                            "w-full mt-6",
                            plan.id === 1 && "bg-gray-500 hover:bg-gray-500",
                        )}
                        disabled={plan.id === 1}
                    >
                        {plan.id === 1 ? "Current Plan" : "Get Started"}
                    </Button>
                </div>

                <div className="p-6 md:w-2/3">
                    <div className="flex flex-col justify-center h-full space-y-4">
                        <p className="text-sm">
                            Everything on previous plan, plus:
                        </p>
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
                            {plan.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="break-inside-avoid"
                                >
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle className="size-3 text-blue-500" />
                                        <p className="text-sm">{feature}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanningSection;
