import { Chip } from "@nextui-org/chip";
import { Card, CardContent } from "../ui/card";
import { experienceData } from "@/constants/experienceData";

export default function ExperienceCards() {
  return (
    <>
      {experienceData.map((experience, i) => (
        <Card key={i} className="border-0 max-w-2xl">
          <div className="px-6 pt-2 relative">
            <div className="absolute -left-[9px] top-[8px] size-4 rounded-full border-2 border-background bg-muted-foreground"></div>

            <p className="text-muted-foreground text-xs">{experience.date}</p>
          </div>

          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <h2 className="text-xl font-semibold">{experience.place}</h2>

              {experience.chip && (
                <Chip size="sm" variant="faded">
                  {experience.chip}
                </Chip>
              )}
            </div>

            <h4 className="font-semibold text-lg">{experience.title}</h4>

            <p className="text-sm text-muted-foreground">{experience.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
