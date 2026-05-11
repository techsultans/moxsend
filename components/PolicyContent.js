export default function PolicyContent({ content }) {
  return (
    <>
      <h1 className="about-title">{content.title}</h1>
      {content.updated && (
        <p className="type-body about-copy policy-updated">{content.updated}</p>
      )}
      {content.intro && <p className="type-body about-copy">{content.intro}</p>}

      <div className="policy-sections">
        {content.sections?.map((section) => (
          <section className="policy-section" key={section.title}>
            <h2 className="policy-heading">{section.title}</h2>
            {section.body && <p className="type-body about-copy">{section.body}</p>}
            {section.items && (
              <ul className="policy-list">
                {section.items.map((item) => (
                  <li className="type-body" key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </>
  )
}
