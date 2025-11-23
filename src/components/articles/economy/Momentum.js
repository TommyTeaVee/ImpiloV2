import React from "react";

const MomentumReturn = () => {
  return (
    <article
      className="uk-article scroll-hint-emoji" 
      style={{ overflowY: "auto", maxHeight: "180vh",  WebkitOverflowScrolling: 'touch', 
  overscrollBehavior: 'contain'  }}
    >
      <div className="uk-container uk-margin-large-top">
        {/* Title + Hero */}
        <div className="uk-text-center uk-margin-large-bottom">
          <h1 className="uk-article-title uk-heading-line">
            <span>Momentum Return: South Africa’s Economic Narrative Shift</span>
          </h1>
          <p className="uk-text-lead uk-margin-remove-top">
            For much of the last decade, the default view was simple:{" "}
            <strong>“leave.”</strong> Over the last six months, the data has
            started to suggest another word: <strong>“return.”</strong>
          </p>
        </div>

        {/* HERO IMAGE / VIDEO PLACEHOLDER */}
        <div className="uk-position-relative uk-margin-medium-bottom">
          <div className="uk-cover-container uk-height-large">
            <img
              src="https://images.pexels.com/photos/14660445/pexels-photo-14660445.jpeg"
              alt="Johannesburg skyline at sunrise"
              data-uk-cover
            />
            <canvas width="600" height="400"></canvas>
          </div>
          <div className="uk-position-bottom uk-overlay uk-overlay-primary uk-text-center uk-padding-small">
            <p className="uk-text-meta">
              Photo by Sherissa R — “Johannesburg Financial District at Dawn”
            </p>
          </div>
        </div>

        {/* INTRODUCTION – NARRATIVE CHANGE */}
        <h3 className="uk-heading-bullet">The Narrative Is Changing</h3>
        <p>
          For the last ten years, South Africa has often been framed through a
          single lens: <em>outflow</em>. Outflow of skills, capital, and
          confidence. The economic conversation centred on downgrade risk,
          fiscal pressure, and structural failures.
        </p>

        <p>
          In the last six months, however, a different set of indicators has
          started to gain weight. Without fanfare, a number of macro and
          market-level signals have shifted from “ deterioration ” to{" "}
          <strong>“gradual improvement.”</strong> The story is not one of a
          sudden boom, but of a slow, data-driven turnaround.
        </p>

        {/* PHOENIX / ECONOMY VISUALS */}
        <div
          className="uk-grid-small uk-child-width-1-2@m uk-margin-medium-top"
          data-uk-grid
        >
          <div>
            <div className="uk-card uk-card-default uk-text-center">
              <div className="uk-cover-container uk-height-medium">
                <img
                  src="https://images.pexels.com/photos/975126/pexels-photo-975126.jpeg"
                  alt="Abstract phoenix rising artwork"
                  data-uk-cover
                />
              </div>
              <p className="uk-text-meta uk-padding-small">
                Visual Placeholder — “Phoenix as a Metaphor for Recovery”
              </p>
            </div>
          </div>

          <div>
            <div className="uk-card uk-card-default uk-text-center">
              <div className="uk-cover-container uk-height-medium">
                <img
                  src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg"
                  alt="Stock market and financial data screens"
                  data-uk-cover
                />
              </div>
              <p className="uk-text-meta uk-padding-small">
                Visual Placeholder — “Financial Markets & Data”
              </p>
            </div>
          </div>
        </div>

        {/* MOMENTUM SHIFT – USING YOUR BULLET POINTS */}
        <h3 className="uk-heading-bullet uk-margin-large-top">
          The Momentum Shift: Key Economic Signals
        </h3>
        <p>
          A momentum shift in an economy rarely starts with sentiment. It starts
          with a few stubborn numbers that no longer fit the old narrative.
          Today, several of those numbers in South Africa look different:
        </p>

        <ul className="uk-list uk-list-divider uk-margin-medium-top">
          <li>
            <strong>Credit Upgrade:</strong> For the first time in around{" "}
            <strong>20 years</strong>, South Africa has seen an{" "}
            <strong>upgrade</strong> from S&amp;P. This speaks directly to
            sovereign risk: lower perceived risk can translate into lower
            borrowing costs and improved access to global capital. Smart money
            is responding by re-weighting exposure rather than exiting.
          </li>
          <li>
            <strong>Energy Stabilisation:</strong>{" "}
            <strong>Eskom reporting a profit</strong> for the first time in 8
            years is not just an accounting detail. It indicates operational
            stabilisation and better cost control. The practical side is felt
            in the absence of frequent{" "}
            <span className="uk-text-italic">load shedding</span>, reducing a
            long-standing drag on productivity, investment decisions, and GDP
            forecasts.
          </li>
          <li>
            <strong>Tech & Infrastructure:</strong>{" "}
            <strong>Visa’s first African data centre in Johannesburg</strong>{" "}
            is a structural signal. Data centres are long-term infrastructure
            bets; they reflect confidence in transaction volumes, digital
            growth, and regional positioning. It embeds South Africa deeper into
            global payment and fintech value chains.
          </li>
          <li>
            <strong>Capital Markets:</strong> The{" "}
            <strong>JSE’s performance</strong> — up nearly{" "}
            <strong>50% in dollar terms</strong> — indicates that listed South
            African assets have re-rated materially. For global investors, this
            is a concrete expression of improved earnings expectations, better
            risk pricing, and relative attractiveness versus peer markets.
          </li>
          <li>
            <strong>Currency:</strong> The{" "}
              <strong>Rand appreciating by roughly 10%</strong> this year is
            another sign of shifting capital flows and changing risk appetite.
            Currencies aggregate many macro stories at once: interest rate
            differentials, trade, sentiment, and portfolio flows.
          </li>
        </ul>

        <p className="uk-margin-medium-top">
          Analysts who once consistently described South Africa in terms of
          decline — including names like <strong>Moody’s</strong> and{" "}
          <strong>Goldman Sachs</strong> — have begun to adjust their language
          towards <strong>“improvement,” “stabilisation”</strong> and{" "}
          <strong>“upside risk.”</strong> The tone has not flipped to euphoria,
          but it has clearly moved away from “uninvestable.”
        </p>

        {/* WHAT'S DRIVING THE ECONOMIC TURN */}
        <h3 className="uk-heading-bullet uk-margin-large-top">
          What’s Behind the Shift?
        </h3>
        <p>
          The emerging momentum is not a single policy win or a one-off windfall.
          Instead, it reflects a combination of incremental improvements:
        </p>

        <ul className="uk-list uk-list-bullet">
          <li>
            <strong>Fiscal Discipline:</strong> A greater focus on revenue,
            expenditure control, and debt management helps underpin the credit
            story and the upgrade narrative.
          </li>
          <li>
            <strong>Energy Reforms:</strong> Efforts to stabilise Eskom and open
            space for private generation reduce a critical structural bottleneck
            for growth.
          </li>
          <li>
            <strong>External Position:</strong> Supportive commodity cycles and
            resilient export sectors have helped the balance of payments, which
            in turn supports the currency and investor confidence.
          </li>
          <li>
            <strong>Institutional Repair:</strong> While uneven, steps towards
            governance improvements, anti-corruption enforcement, and regulatory
            clarity contribute to a more predictable operating environment.
          </li>
        </ul>

        <p>
          Together, these factors create the basis for what can be termed a{" "}
          <strong>“momentum return”</strong>: not a boom, but a shift from
          negative drift to slow, measurable repair.
        </p>

        {/* PHOENIX AS METAPHOR, BUT ECONOMICALLY GROUNDED */}
        <h3 className="uk-heading-bullet uk-margin-large-top">
          A Phoenix Economy: Recovery Through Repair
        </h3>
        <p>
          The idea of a <strong>“phoenix rise”</strong> is often used in a
          dramatic, almost romantic way. In South Africa’s case, it works better
          as an economic metaphor than a slogan.
        </p>

        <p>
          The “ashes” are well documented: years of state capture, weak growth,
          high unemployment, and fragile institutions. The current phase is not
          about forgetting that history; it is about observing how policy,
          markets, and institutions behave after the shock.
        </p>

        <p>
          In a phoenix-type recovery:
        </p>

        <ul className="uk-list uk-list-bullet">
          <li>Balance sheets start to heal before sentiment fully recovers.</li>
          <li>
            External observers (ratings agencies, global banks) adjust their
            risk models before domestic narratives change.
          </li>
          <li>
            The improvements are gradual, uneven, and easy to miss if one only
            looks for crisis headlines.
          </li>
        </ul>

        {/* WHAT TO WATCH – ECONOMICALLY ORIENTED OUTRO */}
        <h3 className="uk-heading-bullet uk-margin-large-top">
          South Africa Is Waking Up: Indicators to Watch
        </h3>
        <p>
          Saying “South Africa is waking up” in economic terms means watching a
          specific set of indicators over time rather than reacting to isolated
          events. Among the most important:
        </p>

        <ul className="uk-list uk-list-bullet">
          <li>Future movements in sovereign ratings and outlooks.</li>
          <li>Consistency of Eskom’s financial and operational performance.</li>
          <li>
            The scale and nature of foreign direct investment, especially in
            tech, logistics, and energy.
          </li>
          <li>
            Sustained behaviour of the JSE in global context, not just in short
            rallies.
          </li>
          <li>
            The Rand’s performance against peers, and what it signals about
            capital flows and risk perception.
          </li>
        </ul>

        <p>
          Framed this way, the current moment is less about patriotic slogans
          and more about <strong>macro data alignment</strong>. For a decade,
          the story was dominated by exit, downgrade, and erosion. Recent
          signals point instead to slow stabilisation, selective return of
          capital, and cautious re-pricing of risk.
        </p>

        <p>
          The narrative is changing — not in speeches, but in balance sheets,
          yield curves, and investment decisions. That is what makes this a{" "}
          <strong>momentum return</strong> rather than a marketing campaign.
        </p>

        {/* QUOTE – NEUTRAL, ECONOMIC TONE */}
        <blockquote cite="#" className="uk-margin-large-top">
          <p>
            “For years, South Africa’s numbers confirmed the story of decline.
            Today, the same numbers are beginning to tell a quieter, more
            technical story — one of gradual repair and returning momentum.”
          </p>
        </blockquote>
      </div>
    </article>
  );
};

export default MomentumReturn;
