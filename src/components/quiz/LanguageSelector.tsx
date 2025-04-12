
import { Card, CardContent } from "@/components/ui/card";
import { Language } from "@/utils/quizDataHelpers";

interface LanguageSelectorProps {
  onSelect: (language: Language) => void;
}

const LanguageSelector = ({ onSelect }: LanguageSelectorProps) => {
  // Update type to use a wider range of languages with a type assertion
  const languages: { name: Language; icon: string }[] = [
    { name: "JavaScript", icon: "JS" },
    { name: "Java", icon: "J" },
    { name: "HTML", icon: "H" },
    { name: "CSS", icon: "CS" },
    { name: "React", icon: "R" },
    { name: "Next.js", icon: "N" },
    { name: "Python", icon: "PY" },
    { name: "TypeScript", icon: "TS" },
    { name: "Tailwind CSS", icon: "TW" },
    { name: "Bootstrap", icon: "BS" },
    { name: "C", icon: "C" },
    { name: "C++", icon: "C++" },
    { name: "Ruby", icon: "RB" },
    { name: "Rust", icon: "RS" },
    { name: "Other", icon: "O" },
  ];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Select a Language to Begin
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {languages.map((lang) => (
          <Card
            key={lang.name}
            className="hover:shadow-md transition-all hover:scale-105 duration-300 hover:border-orange-500 cursor-pointer border-2"
            onClick={() => onSelect(lang.name)}
          >
            <CardContent className="p-6 flex items-center">
              <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 h-12 w-12 rounded-lg flex items-center justify-center mr-4 font-bold">
                {lang.icon}
              </div>
              <div>
                <h3 className="font-medium">{lang.name}</h3>
                <p className="text-xs text-muted-foreground">
                  Start learning {lang.name}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
