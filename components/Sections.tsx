

const componentMap: { [key: string]: React.ComponentType<any> } = {
  // Map section types to their corresponding components here
  // e.g., 'heroSection': HeroSectionComponent,

  
}; 

export default function Sections({ sections }: { sections?: Section[] }) {
  if (!sections || sections.length === 0) {
    return <p>No section included in this page</p>;
  }

  return (
    <>
      {sections.map((section: Section) => {
        const Component = componentMap[section._type];
        if (!Component) {
          return (
            <div data-type={section._type} key={section._key}>
              Unknown section type: {section._type}
            </div>
          );
        }
        return <Component {...section} key={section._key}  />;
      })}
    </>
  );
}
