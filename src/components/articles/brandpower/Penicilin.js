import React from "react";

const Penicillin = () => {
  return (
    <article
      className="uk-article"
      style={{ overflowY: "auto", maxHeight: "100vh" }}
    >
      <div className="uk-container uk-margin-large-top">
        {/* TITLE + DEK */}
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>The Accidental Miracle: The Discovery of Penicillin</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            How a forgotten petri dish, a curious scientist, and a decade of
            persistence reshaped modern medicine.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="uk-position-relative uk-margin-medium-bottom">
          <div className="uk-cover-container uk-height-large">
            <img
              src="https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg"
              alt="Scientist working in a laboratory"
              data-uk-cover
            />
            <canvas width="600" height="400"></canvas>
          </div>
          <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-text-center uk-padding-small">
            <p className="uk-text-meta">
              Editorial Image — “Laboratory culture plates and glassware”
              (Pexels)
            </p>
          </div>
        </div>

        {/* INTRO SECTION */}
        <section className="uk-margin-large-bottom">
          <p>
            In the annals of medical history, few events have had as profound an
            impact on human health as the discovery of{" "}
            <strong>penicillin</strong>. Often called{" "}
            <em>the first true antibiotic</em>, it transformed how we treat
            bacterial infections and ushered in a new era in medicine.
          </p>

          <p>
            Yet this world-changing breakthrough did not begin in a gleaming,
            meticulously planned high-tech facility. It began with a messy lab
            bench, a forgotten petri dish, and a scientist who refused to ignore
            something unusual.
          </p>
        </section>

        {/* SPLIT LAYOUT – FLEMING INTRO */}
        <div
          className="uk-grid-large uk-child-width-1-2@m uk-flex-middle uk-margin-large-bottom"
          data-uk-grid
        >
          <div>
            <h3 className="uk-heading-bullet">A Chance Encounter with a Mold</h3>
            <p>
              The story opens in <strong>1928</strong> at{" "}
              <strong>St. Mary&apos;s Hospital</strong> in London. Scottish
              bacteriologist <strong>Alexander Fleming</strong> was studying
              influenza and working with plates of{" "}
              <em>Staphylococcus</em> bacteria.
            </p>
            <p>
              Before leaving for a two-week vacation, Fleming left one petri dish
              uncovered on his workbench. When he returned, he noticed something
              strange: a <strong>blue-green mold</strong> had contaminated the
              plate — and around it was a clear halo where the staph bacteria
              had been destroyed.
            </p>
            <p>
              The contaminant was later identified as{" "}
              <strong>Penicillium notatum</strong>. Fleming deduced that this
              mold produced a substance that inhibited bacterial growth. He named
              this mysterious antibacterial compound{" "}
              <strong>penicillin</strong>.
            </p>
          </div>
          <div>
            <div className="uk-card uk-card-default uk-overflow-hidden">
              <div className="uk-cover-container uk-height-medium">
                <img
                  src="https://images.pexels.com/photos/1393981/pexels-photo-1393981.jpeg"
                  alt="Petri dishes with bacterial cultures"
                  data-uk-cover
                />
              </div>
              <div className="uk-padding-small">
                <p className="uk-text-meta uk-margin-remove-top">
                  Magazine Visual — “Petri dishes and microbial cultures”
                  (Pexels)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LAB CURIOSITY ERA */}
        <section className="uk-margin-large-bottom">
          <p>
            In <strong>1929</strong>, Fleming published his findings in a
            scientific journal. The paper described penicillin&apos;s ability to
            kill certain bacteria and suggested its possible medical use.
            However, the compound was unstable and difficult to isolate.
          </p>

          <p>
            To many of his contemporaries, penicillin was an interesting
            laboratory phenomenon — nothing more. Funding was scarce, techniques
            were limited, and the world was not yet ready to bet on a mold that
            refused to behave reliably in the lab. For nearly a decade,
            penicillin remained where it started: on the fringes of scientific
            curiosity.
          </p>
        </section>

        {/* OXFORD TEAM FEATURE STRIP */}
        <section className="uk-margin-large-bottom">
          <div className="uk-text-center uk-margin-medium-bottom">
            <h3 className="uk-heading-bullet">
              Turning a Discovery into a Drug
            </h3>
            <p className="uk-text-meta">
              The Oxford team that turned an accident into a weapon against
              infection.
            </p>
          </div>

          <div
            className="uk-grid-medium uk-child-width-1-3@m uk-margin-bottom"
            data-uk-grid
          >
            <div>
              <div className="uk-card uk-card-default uk-card-small uk-text-center">
                <div className="uk-cover-container uk-height-small">
                  <img
                    src="https://images.pexels.com/photos/3735761/pexels-photo-3735761.jpeg"
                    alt="Scientist holding laboratory sample"
                    data-uk-cover
                  />
                </div>
                <div className="uk-padding-small">
                  <h4 className="uk-margin-small-bottom">Howard Florey</h4>
                  <p className="uk-text-meta uk-margin-remove-top">
                    The organizer — drove the research, trials, and funding.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="uk-card uk-card-default uk-card-small uk-text-center">
                <div className="uk-cover-container uk-height-small">
                  <img
                    src="https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg"
                    alt="Scientist working carefully with glassware"
                    data-uk-cover
                  />
                </div>
                <div className="ukpadding-small uk-padding-small">
                  <h4 className="uk-margin-small-bottom">Ernst Boris Chain</h4>
                  <p className="uk-text-meta uk-margin-remove-top">
                    The chemist — helped unlock penicillin&apos;s structure and
                    stability.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="uk-card uk-card-default uk-card-small uk-text-center">
                <div className="uk-cover-container uk-height-small">
                  <img
                    src="https://images.pexels.com/photos/5904934/pexels-photo-5904934.jpeg"
                    alt="Lab technician examining sample"
                    data-uk-cover
                  />
                </div>
                <div className="uk-padding-small">
                  <h4 className="uk-margin-small-bottom">Norman Heatley</h4>
                  <p className="uk-text-meta uk-margin-remove-top">
                    The problem-solver — devised methods to extract and
                    concentrate the drug.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p>
            In the late <strong>1930s</strong>, at the{" "}
            <strong>University of Oxford</strong>, Florey, Chain, Heatley, and
            their team revisited Fleming&apos;s neglected discovery. Using new
            techniques and relentless experimentation, they managed to{" "}
            <strong>isolate and purify</strong> penicillin in a form that could
            be safely given to animals and humans.
          </p>

          <p>
            By <strong>1941</strong>, early clinical trials on patients with
            severe bacterial infections showed remarkable results. Infections
            that once spiraled toward death began to recede. Wounds cleared.
            Fevers broke. A laboratory curiosity had become a potential
            life-saving medicine.
          </p>
        </section>

        {/* WWII / MASS PRODUCTION SECTION WITH IMAGE STRIP */}
        <section className="uk-margin-large-bottom">
          <div
            className="uk-grid-large uk-child-width-1-2@m uk-flex-middle"
            data-uk-grid
          >
            <div>
              <h3 className="uk-heading-bullet">War, Industry, and a Lifeline</h3>
              <p>
                World War II turned penicillin from a promising treatment into a
                strategic necessity. Battlefield infections —
                from bullet wounds to shrapnel injuries — were claiming the
                lives of soldiers even after they survived the initial trauma.
              </p>
              <p>
                Recognising its potential, the{" "}
                <strong>Allied forces</strong> partnered with pharmaceutical
                companies and U.S. scientists to unlock large-scale
                manufacturing. New fermentation techniques, factory-scale
                production, and government support meant that by{" "}
                <strong>1944</strong>, as the D-Day invasion unfolded,
                penicillin was being shipped in mass quantities to the front.
              </p>
              <p>
                Deaths from infected wounds dropped dramatically. Amputations
                that once felt inevitable could be avoided. Penicillin became
                more than a drug — it was a quiet weapon reshaping survival in
                war.
              </p>
            </div>
            <div>
              <div className="uk-card uk-card-default uk-overflow-hidden">
                <div className="uk-cover-container uk-height-medium">
                  <img
                    src="https://images.pexels.com/photos/2526024/pexels-photo-2526024.jpeg"
                    alt="Historical style medical kit and documents"
                    data-uk-cover
                  />
                </div>
                <div className="uk-padding-small">
                  <p className="uk-text-meta uk-margin-remove-top">
                    Editorial Image — “Medical supplies reminiscent of wartime”
                    (Pexels)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ANTIBIOTIC ERA */}
        <section className="uk-margin-large-bottom">
          <h3 className="uk-heading-bullet">The Birth of the Antibiotic Era</h3>
          <p>
            The success of penicillin opened the floodgates. Drug companies and
            researchers around the world began searching for{" "}
            <strong>new antibiotics</strong>, each targeting different bacteria.
            Diseases that had once been devastating — pneumonia, sepsis,
            syphilis, rheumatic fever — could now be treated quickly and
            effectively.
          </p>

          <p>
            The ripple effect was enormous. Surgery became safer. Childbirth
            became less deadly. Everyday injuries no longer carried the same
            risk of catastrophic infection. Penicillin changed not just how
            doctors treated illness, but how they{" "}
            <em>planned procedures and imagined possibilities</em>.
          </p>
        </section>

        {/* NOBEL + RESISTANCE WARNING */}
        <section className="uk-margin-large-bottom">
          <div className="uk-card uk-card-primary uk-card-body">
            <h3 className="uk-margin-remove-top">Recognition and a Warning</h3>
            <p>
              In <strong>1945</strong>,{" "}
              <strong>Fleming, Florey, and Chain</strong> were awarded the{" "}
              <strong>Nobel Prize in Physiology or Medicine</strong> for their
              roles in the development of penicillin.
            </p>
            <p>
              During his Nobel lecture, Fleming issued a remarkably prescient
              warning: if penicillin were used carelessly or in insufficient
              doses, bacteria could become resistant. The miracle could be
              undone by misuse.
            </p>
            <p>
              Today, as antibiotic resistance grows into a global health
              crisis, Fleming&apos;s caution feels less like a footnote and more
              like a prophecy. The miracle of penicillin is powerful — but not
              invincible.
            </p>
          </div>
        </section>

        {/* LEGACY / CLOSING QUOTE */}
        <section className="uk-margin-large-bottom">
          <h3 className="uk-heading-bullet">Legacy of a Moldy Plate</h3>
          <p>
            The discovery of penicillin is, at its heart, a story about{" "}
            <strong>attention and collaboration</strong>. A scientist noticed
            something odd on a neglected dish and chose curiosity over
            convenience. Other scientists, years later, saw potential where
            others had shrugged and did the painstaking work to make it useful
            for humanity.
          </p>

          <p>
            What began as a contaminated petri dish became a{" "}
            <strong>revolution</strong> in medicine — one that has saved
            millions of lives and continues to do so nearly a century later.
          </p>

          <blockquote cite="#" className="uk-margin-large-top">
            <p>
              “The accidental miracle of penicillin reminds us that history
              doesn&apos;t only change in moments of grand design — sometimes it
              turns on a speck of mold, a curious gaze, and the decision to
              ask, ‘What if this matters?’”
            </p>
          </blockquote>
        </section>
      </div>
    </article>
  );
};

export default Penicillin;
