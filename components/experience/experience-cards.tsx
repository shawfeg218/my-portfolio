import { Chip } from "@nextui-org/chip";
import { Card, CardContent } from "../ui/card";
import { experienceData } from "@/constants/experienceData";

type Props = {
  overview?: boolean;
};

export default function ExperienceCards(props: Props) {
  const { overview } = props;

  const data = overview ? experienceData.slice(0, 2) : experienceData;

  return (
    <>
      {data.map((experience, i) => (
        <Card key={i} className="border-0 shadow-none">
          <div className="px-6 pt-2 relative">
            <div className="absolute -left-[9px] top-[8px] size-4 rounded-full border-2 border-background bg-muted-foreground"></div>

            <p className="text-muted-foreground text-xs">{experience.date}</p>
          </div>

          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-semibold">{experience.place}</h2>

              {experience.chip && (
                <Chip size="sm" variant="faded">
                  {experience.chip}
                </Chip>
              )}
            </div>

            <h4 className="font-semibold text-md">{experience.title}</h4>

            {overview ? (
              <p className="text-sm text-muted-foreground">{experience.description[0]}</p>
            ) : (
              <>
                {experience.description.map((desc, i) => (
                  <p key={i} className="text-sm text-muted-foreground">
                    {desc}
                  </p>
                ))}
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
}
