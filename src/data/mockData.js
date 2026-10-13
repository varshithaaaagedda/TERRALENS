// TerraLens Climate Intelligence & Greenwashing Verification Dataset

export const AUDIT_CASES = [
  {
    id: "microsoft",
    companyName: "Microsoft Corporation",
    ticker: "MSFT-NASDAQ",
    sector: "Cloud Infrastructure & Software",
    reportTitle: "2024 Environmental Sustainability Report",
    publicationDate: "May 2024",
    reportPages: 104,
    verificationScore: 94,
    greenwashingRisk: "LOW",
    riskScore: 12,
    summary: "Investigation corroborates that Microsoft procured 26.45 Billion kWh of verified renewable energy attributes covering 100% of global datacenter and campus operations, with operational physical PPA facilities confirmed via federal EIA Form 860 inventories.",
    blockchainRecord: {
      blockNumber: 19842104,
      network: "TerraLens Climate Ledger (Polygon L2 Proof)",
      txHash: "0x8e71b2d9a5f4c80327fbc9048a1c629e47d10b7c3d258a149f632e88a0b1c94d",
      merkleRoot: "0x4ca170f3b0e2518e9a117d6b82ce994b7c631e50821c97a22ff5d5904ea8b193",
      timestamp: "2024-10-12T14:32:18Z",
      validatorCount: 28,
      status: "IMMUTABLE_VERIFIED"
    },
    riskDimensions: {
      offsetQuality: 14,
      scope3Coverage: 28,
      baselineIntegrity: 16,
      empiricalAlignment: 12,
      transparency: 10
    },
    claims: [
      {
        id: "ms-claim-1",
        claimText: "Microsoft achieved 100% renewable electricity coverage across our global datacenter and campus operations via contracted PPAs and renewable attribute retirement.",
        category: "Renewable Electricity Procurement",
        pageReference: "Page 22, Section 2.1",
        verdict: "SUPPORTED",
        confidence: 96,
        confidenceReason: "Official EPA Green Power Partnership verified filing records 26.45 Billion kWh/year green power procurement, corroborated by EIA Form 860 PPA generator interconnections.",
        claimMetrics: {
          claimed: "100.0% Renewable Electricity (26.45 Billion kWh)",
          verified: "100.0% EPA Verified (26.45 Billion kWh Procured)"
        },
        evidenceSources: [
          {
            name: "US Environmental Protection Agency - Green Power Partnership (GPP)",
            type: "Official Federal Registry",
            finding: "Official EPA Green Power Partnership verified partner filing records 26,450,000,000 kWh/year green power procurement, representing 100.0% of total electricity within partner boundary.",
            reliability: 98,
            link: "https://www.epa.gov/greenpower"
          },
          {
            name: "US Energy Information Administration (EIA) Form 860",
            type: "Government Generator Inventory",
            finding: "EIA Form 860 Monthly Generator Inventory confirms operational status for off-take assets: Solstice Solar Cluster (250 MW, COD 2023), Plains Wind Phase IV (180 MW, COD 2022).",
            reliability: 99,
            link: "https://www.eia.gov/electricity/data/eia860/"
          },
          {
            name: "EnergyTag Granular Certificate Standard Disclosures",
            type: "Hourly Metered Audit",
            finding: "Hourly granular matching verified in pilot European and PJM nodal zones; global aggregate volume meets RE100 annual market-based criteria.",
            reliability: 91,
            link: "https://www.energytag.org"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "None (Empirically Corroborated)",
          mechanism: "Facility-specific Power Purchase Agreements (PPAs) coupled with verified EAC retirements conform strictly to RE100 technical criteria and GHG Protocol Scope 2 Market-Based Guidance.",
          regulatoryWarning: "Fully compliant with US FTC Green Guides and EU Green Claims Directive criteria."
        },
        evidenceFingerprint: "sha256:d48e02554790bbd3876e5d774213cb5d8487ab953267998394ef35cce21894a0"
      },
      {
        id: "ms-claim-2",
        claimText: "Contracted over 19.8 gigawatts of new renewable energy assets across 21 countries, expanding our operational clean energy portfolio.",
        category: "Clean Energy Capacity Growth",
        pageReference: "Page 26, Energy Procurement",
        verdict: "SUPPORTED",
        confidence: 94,
        confidenceReason: "Aggregated corporate PPA deal tracker (BloombergNEF) and utility interconnection queues verify 19.8 GW signed pipeline capacity.",
        claimMetrics: {
          claimed: "19.8 GW Contracted Renewable Assets",
          verified: "19.6 GW Corroborated Offtake PPA Capacity"
        },
        evidenceSources: [
          {
            name: "BloombergNEF Clean Energy Corporate Offtake Tracker",
            type: "Market Intelligence Registry",
            finding: "Cross-referenced public commercial agreements confirm 19.6 GW of executed solar and wind PPA agreements through Q4 2024.",
            reliability: 95,
            link: "https://about.bnef.com"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "None (Empirically Corroborated)",
          mechanism: "Additionality criteria met through newly constructed capacity connected to local transmission grids.",
          regulatoryWarning: "Aligned with RE100 additionality standards."
        },
        evidenceFingerprint: "sha256:a20948bf02410b98124ef1185038927160ea472910bb45109403aeb78d91024b"
      },
      {
        id: "ms-claim-3",
        claimText: "Achieved 24/7 hourly matching of datacenter power with carbon-free electricity across all worldwide cloud regions.",
        category: "24/7 Hourly Granular Matching",
        pageReference: "Page 30, Grid Decarbonization",
        verdict: "INSUFFICIENT EVIDENCE",
        confidence: 89,
        confidenceReason: "Audited EnergyTag disclosures demonstrate hourly matching in select pilot regions (Ireland, Netherlands, Virginia PJM), but global fleet operates on annual volumetric netting.",
        claimMetrics: {
          claimed: "Global 24/7 Hourly Matched Carbon-Free Energy",
          verified: "Hourly match confirmed in 4 regional grids; remaining 18 regions rely on annual attribute balancing"
        },
        evidenceSources: [
          {
            name: "UN 24/7 Carbon-Free Energy Compact Progress Disclosure",
            type: "Granular Metering Standard",
            finding: "Hourly nodal data disclosed for 4 regional clusters. 18 regional zones lack published hourly generation-consumption matching data.",
            reliability: 94,
            link: "https://gocarbonfree.org"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Regional Pilot Extrapolation to Global Assertion",
          mechanism: "Organization achieved exemplary hourly pilot performance, but universal 24/7 hourly matching across all hours remains methodologically unproven without hour-by-hour telemetry.",
          regulatoryWarning: "Ethical standard applied: Finding classified as Insufficient Evidence without accusing the entity of greenwashing."
        },
        evidenceFingerprint: "sha256:889021e8430a9c82115fbe84109403aeb78d91117498c0be8d91a629fba713cd"
      }
    ]
  },
  {
    id: "veritas",
    companyName: "Veritas EcoLogistics LLC",
    ticker: "PRIV-LOG",
    sector: "Freight & Warehousing",
    reportTitle: "2024 Green Horizons Corporate Sustainability Summary",
    publicationDate: "June 2024",
    reportPages: 24,
    verificationScore: 50,
    greenwashingRisk: "MODERATE",
    riskScore: 48,
    summary: "Veritas claimed 100% net-zero operational warehousing, but federal EPA Green Power Partnership and EIA databases contain zero registered filings or interconnection notices for the entity. Consistent with TerraLens verification principles, this unresolved data vacuum is classified strictly as Insufficient Evidence rather than an accusation of greenwashing.",
    blockchainRecord: {
      blockNumber: 19842106,
      network: "TerraLens Climate Ledger (Polygon L2 Proof)",
      txHash: "0x4b71a0c8491bb402ef71629e47d10b7c3d258a149f632e88a0b1c94d8e71b2d9",
      merkleRoot: "0x229403aeb78d91117498c0be8d91a629fba713cd549021e8430a9c82115fbe84",
      timestamp: "2024-06-30T11:00:00Z",
      validatorCount: 18,
      status: "IMMUTABLE_VERIFIED"
    },
    riskDimensions: {
      offsetQuality: 50,
      scope3Coverage: 55,
      baselineIntegrity: 45,
      empiricalAlignment: 50,
      transparency: 40
    },
    claims: [
      {
        id: "veritas-claim-1",
        claimText: "Operates 100% net-zero distribution logistics and warehouse facilities powered entirely by clean renewable electricity.",
        category: "Renewable Electricity & Warehousing",
        pageReference: "Page 4, Executive Letter",
        verdict: "INSUFFICIENT EVIDENCE",
        confidence: 82,
        confidenceReason: "Official federal energy databases (EPA GPP & EIA Form 860) contain no registered filings or filings under corporate parent aliases.",
        claimMetrics: {
          claimed: "100% Net-Zero Clean Electricity Facilities",
          verified: "No Federal Registry Record Found (Data Absence)"
        },
        evidenceSources: [
          {
            name: "US EPA Green Power Partnership Registry Query",
            type: "Official Federal Registry Search",
            finding: "Automated query for 'Veritas EcoLogistics LLC' returned zero partner matches in the GPP National Top 100 or sector partner lists.",
            reliability: 98,
            link: "https://www.epa.gov/greenpower"
          },
          {
            name: "US EIA Form 860 Commercial Inventory",
            type: "Federal Generator Registry Search",
            finding: "No on-site commercial solar or storage generation assets registered under target corporate entity.",
            reliability: 99,
            link: "https://www.eia.gov"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Federal Registry Absence / Ethical Data Vacuum",
          mechanism: "Entity has not published verifiable certificate serial numbers or registered with federal reporting programs.",
          regulatoryWarning: "Principle of Neutrality: TerraLens strictly categorizes data absence as Insufficient Evidence. Absence of data is never conflated with guilt."
        },
        evidenceFingerprint: "sha256:5501843aeb78d91117498c0be8d91a629fba713cd549021e8430a9c82115fbe8"
      }
    ]
  },
  {
    id: "aeroglobal",
    companyName: "AeroGlobal SkyWays Group",
    ticker: "AGS-AIR",
    sector: "Aviation & Logistics",
    reportTitle: "Annual Climate Action & Net-Zero 2025 Roadmap",
    publicationDate: "February 2025",
    reportPages: 92,
    verificationScore: 36, // Overall integrity score (0-100)
    greenwashingRisk: "HIGH", // LOW, MODERATE, HIGH
    riskScore: 79, // 0 - 100 risk
    summary: "Investigation reveals that 78% of the carrier's 'Carbon Neutral Flight' pledge relies on non-additional forestry offsets with documented harvest disturbances, while Scope 3 jet fuel lifecycle emissions were omitted.",
    blockchainRecord: {
      blockNumber: 19842104,
      network: "TerraLens Climate Ledger (Polygon L2 Proof)",
      txHash: "0x8e71b2d9a5f4c80327fbc9048a1c629e47d10b7c3d258a149f632e88a0b1c94d",
      merkleRoot: "0x4ca170f3b0e2518e9a117d6b82ce994b7c631e50821c97a22ff5d5904ea8b193",
      timestamp: "2025-02-14T10:42:19Z",
      validatorCount: 18,
      status: "IMMUTABLE_VERIFIED"
    },
    riskDimensions: {
      offsetQuality: 88, // higher means higher greenwashing risk
      scope3Coverage: 82,
      baselineIntegrity: 64,
      empiricalAlignment: 85,
      transparency: 68
    },
    claims: [
      {
        id: "ag-claim-1",
        claimText: "100% of our domestic transcontinental passenger flights are rendered entirely carbon-neutral via certified nature-based forestry carbon removal projects in Zimbabwe and Brazil.",
        category: "Emissions Offsets & Carbon Neutrality",
        pageReference: "Page 14, Section 3.2",
        verdict: "CONTRADICTED",
        confidence: 96,
        confidenceReason: "Independent satellite radar deforestation tracking and registry serial number audits prove baseline inflation and active deforestation in offset concession areas.",
        claimMetrics: {
          claimed: "100% Net-Neutral Flights (3.8M tCO2e offset)",
          verified: "Only 14.2% genuine permanent removal"
        },
        evidenceSources: [
          {
            name: "Copernicus Sentinel-2 & Global Forest Watch Radar",
            type: "Satellite Telemetry",
            finding: "Remote sensing detected 3,420 hectares of severe canopy loss and active logging within concession plot #KB-09 credited to AeroGlobal.",
            reliability: 98,
            link: "https://sentinel.esa.int"
          },
          {
            name: "Berkeley Carbon Trading Project Offset Registry Database",
            type: "Academic & Forensic Audit",
            finding: "Credits purchased exhibit a 7.2x baseline over-crediting ratio; project failed permanence criteria under Verra VM0007 standard revisions.",
            reliability: 94,
            link: "https://gspp.berkeley.edu"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Phantom Carbon Offsets & Non-Additionality",
          mechanism: "Purchased unbundled avoidance credits rather than durable geological or biogenic removals, falsely advertised as operational neutrality to consumers.",
          regulatoryWarning: "Violates EU Green Claims Directive (2024/825) ban on advertising products as climate neutral based on offset compensation."
        },
        evidenceFingerprint: "sha256:d48e02554790bbd3876e5d774213cb5d8487ab953267998394ef35cce21894a0"
      },
      {
        id: "ag-claim-2",
        claimText: "Reduced average passenger-kilometer fuel burn by 11.8% across mainline operations compared to the 2019 pre-pandemic operational baseline.",
        category: "Fleet Operational Efficiency",
        pageReference: "Page 28, Section 4.1",
        verdict: "SUPPORTED",
        confidence: 92,
        confidenceReason: "ADS-B commercial telemetry flight tracking and ICAO engine emission factors corroborate CFM LEAP-1A retrofit fleet performance.",
        claimMetrics: {
          claimed: "-11.8% gCO2/pax-km reduction",
          verified: "-11.4% corroborated average reduction"
        },
        evidenceSources: [
          {
            name: "ICAO Environmental Report & ADS-B Exchange Telemetry",
            type: "Global Flight Tracking",
            finding: "Average flight fuel burn declined from 3.12 L/100pax-km (2019) to 2.76 L/100pax-km (2024) across 240,000 tracked movements.",
            reliability: 95,
            link: "https://icao.int/environmental-protection"
          },
          {
            name: "EASA Fleet Emissions Registry",
            type: "Regulatory Compliance Log",
            finding: "Verified fleet renewal: 48 Airbus A321neo deliveries displaced 36 vintage A320ceo airframes.",
            reliability: 99,
            link: "https://easa.europa.eu"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "None (Empirically Corroborated)",
          mechanism: "Hardware modernization and payload densification contributed genuine operational intensity reductions.",
          regulatoryWarning: "Compliant with ICAO CORSIA baseline measurement methodology."
        },
        evidenceFingerprint: "sha256:88fb305c451b6819ac409091dcbbd341e976f082e6efb8348b6714d2417721ba"
      },
      {
        id: "ag-claim-3",
        claimText: "Committed to powering 15% of all flight operations with certified Sustainable Aviation Fuel (SAF) by 2028 with binding supplier off-take agreements.",
        category: "Future Energy Transition",
        pageReference: "Page 45, Section 5.3",
        verdict: "INSUFFICIENT EVIDENCE",
        confidence: 84,
        confidenceReason: "Disclosed off-take contracts lack binding delivery schedules, price indexed guarantees, or feedstock lifecycle certification.",
        claimMetrics: {
          claimed: "15% SAF Blend by 2028 (~850M liters)",
          verified: "Only 12M liters under binding firm purchase agreement"
        },
        evidenceSources: [
          {
            name: "BloombergNEF SAF Market Tracker & SEC Form 10-K Filings",
            type: "Financial & Contract Disclosure",
            finding: "Signed agreements represent non-binding Memoranda of Understanding (MoU). Current physical SAF uptake stands at 0.3% of total fuel load.",
            reliability: 91,
            link: "https://about.bnef.com"
          },
          {
            name: "RSB (Roundtable on Sustainable Biomaterials) Chain of Custody",
            type: "Feedstock Certification",
            finding: "No chain of custody tracking filed for secondary HEFA feedstock suppliers; high indirect land-use change risk.",
            reliability: 87,
            link: "https://rsb.org"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Aspirational Forward Statements Without Capital Allocation",
          mechanism: "Company conflates non-binding expressions of interest with committed procurement to project proactive climate transition.",
          regulatoryWarning: "High scrutiny under UK ASA (Advertising Standards Authority) guidance on substantiating forward-looking sustainability promises."
        },
        evidenceFingerprint: "sha256:326190be9d56ac9fa1b8cce609e01b7a2d6a5e173ffb90f4e24ab058b73f8e52"
      }
    ]
  },
  {
    id: "verdant",
    companyName: "Verdant Energy Corp",
    ticker: "VEC-UTIL",
    sector: "Utilities & Energy",
    reportTitle: "2024 Transition Pathway: Accelerating Clean Power",
    publicationDate: "November 2024",
    reportPages: 114,
    verificationScore: 28,
    greenwashingRisk: "HIGH",
    riskScore: 84,
    summary: "Verdant claimed a 65% reduction in direct coal emissions, but satellite telemetry and EPA records indicate 3 gigawatts of coal assets were transferred to an unconsolidated joint venture rather than retired, alongside persistent unrecorded flaring.",
    blockchainRecord: {
      blockNumber: 19821800,
      network: "TerraLens Climate Ledger (Polygon L2 Proof)",
      txHash: "0x3f5c7199b014dae7399812efaa432c79f182bb04c1029e843bb0531e2170cc31",
      merkleRoot: "0x117498c0be8d91a629fba713cd549021e8430a9c82115fbe84109403aeb78d91",
      timestamp: "2024-11-20T16:15:02Z",
      validatorCount: 22,
      status: "IMMUTABLE_VERIFIED"
    },
    riskDimensions: {
      offsetQuality: 74,
      scope3Coverage: 91,
      baselineIntegrity: 89,
      empiricalAlignment: 92,
      transparency: 75
    },
    claims: [
      {
        id: "ve-claim-1",
        claimText: "Eliminated 65% of Scope 1 operational CO2 emissions by permanently retiring legacy thermal coal generation facilities.",
        category: "Direct Emissions Abatement",
        pageReference: "Page 9, Executive Summary",
        verdict: "CONTRADICTED",
        confidence: 98,
        confidenceReason: "EPA Title V emissions filings and ownership records confirm four 'retired' coal plants were spun off into private LLCs and continue round-the-clock generation.",
        claimMetrics: {
          claimed: "-65% Operational CO2 (-28.4 Mt CO2)",
          verified: "Real planetary abatement: -4.1 Mt CO2 (85% transferred)"
        },
        evidenceSources: [
          {
            name: "US EPA Clean Air Markets Data (CAMD) Continuous Emission Monitoring",
            type: "Government Sensor Registry",
            finding: "Smokestack continuous sensor data shows 22.8 Mt CO2 emitted in 2024 from the newly formed 'Prairie Energy LLC', which shares corporate officers with Verdant.",
            reliability: 99,
            link: "https://epa.gov/airmarkets"
          },
          {
            name: "FERC Form 1 Utility Filings & Ownership Restructuring",
            type: "Regulatory Asset Records",
            finding: "Power Purchase Agreements (PPAs) confirm Verdant purchases 80% of output back from the spun-off plant, concealing it from Scope 1 reporting.",
            reliability: 97,
            link: "https://ferc.gov"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Asset Dumping & Scope 1 Shifting",
          mechanism: "Carbon emissions were removed from the balance sheet through accounting re-classification while absolute atmospheric emissions continued unaltered.",
          regulatoryWarning: "Subject to SEC ESG Disclosures Rule on Scope 1 organizational boundary manipulation."
        },
        evidenceFingerprint: "sha256:e1a90c427f71be0b77da13b0c954e3f528a47402636a0c4923f6e165421a998b"
      },
      {
        id: "ve-claim-2",
        claimText: "Zero methane flaring and venting achieved across all associated natural gas processing facilities ahead of regulatory 2026 targets.",
        category: "Methane Mitigation",
        pageReference: "Page 34, Clean Gas Roadmap",
        verdict: "CONTRADICTED",
        confidence: 94,
        confidenceReason: "NOAA VIIRS Nightfire satellite radiometric scans and GHGSat high-resolution methane plumes detected persistent flaring at 14 Verdant gathering hubs.",
        claimMetrics: {
          claimed: "0% Routine Flaring / Venting",
          verified: "14 active flaring clusters with 4,200 hrs recorded duration"
        },
        evidenceSources: [
          {
            name: "NOAA Earth Observation Group (EOG) VIIRS Nightfire Data",
            type: "Thermal Infrared Satellite",
            finding: "Satellite thermal radiometry documented continuous gas flaring combusting an estimated 11.4 million m³ of associated gas in the Delaware Basin.",
            reliability: 96,
            link: "https://eogdata.mines.edu"
          },
          {
            name: "GHGSat Commercial Methane Satellite Constellation",
            type: "Point-Source Methane Imaging",
            finding: "Detected three major super-emitter methane plumes (>2,500 kg/hr) over Verdant pipeline compressor station #12.",
            reliability: 93,
            link: "https://ghgsat.com"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Empirical Discrepancy (Satellite vs Self-Reported)",
          mechanism: "Company utilized theoretical desktop emissions factors instead of optical gas imaging (OGI) or sensor telemetry.",
          regulatoryWarning: "Violates EPA Super-Emitter Response Program reporting mandates."
        },
        evidenceFingerprint: "sha256:a902f5e3bc1026da89b27163ef293b9e843c091d7411628cae88410fb472e391"
      },
      {
        id: "ve-claim-3",
        claimText: "Added 2.4 GW of new utility-scale solar generation and 800 MWh grid-tied battery storage to regional interconnections during 2024.",
        category: "Renewable Generation Capacity",
        pageReference: "Page 52, Clean Power Capital",
        verdict: "SUPPORTED",
        confidence: 97,
        confidenceReason: "Regional Transmission Organization (MISO & PJM) queue energization confirmations match company capital expenditure disclosures.",
        claimMetrics: {
          claimed: "+2,400 MW Solar & 800 MWh Storage",
          verified: "+2,385 MW Solar & 790 MWh Storage energized"
        },
        evidenceSources: [
          {
            name: "EIA Form 860 (Monthly Electric Generator Inventory)",
            type: "US Federal Energy Data",
            finding: "Federal registry logs 6 new solar utility farms entering commercial operation under Verdant ownership during the fiscal period.",
            reliability: 99,
            link: "https://eia.gov"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "None (Empirically Corroborated)",
          mechanism: "Tangible capital deployment backed by physical interconnection receipts.",
          regulatoryWarning: "Qualifies for clean electricity production tax credits."
        },
        evidenceFingerprint: "sha256:77bc09918a23d4e6801b7a2d8471e983401569be514782bb0a02ef34ca8109ad"
      }
    ]
  },
  {
    id: "nordic-tech",
    companyName: "Nordic Aurora Tech AB",
    ticker: "NAT-STO",
    sector: "Cloud Infrastructure & AI",
    reportTitle: "2024-2025 Sustainability & 24/7 Clean Energy Impact",
    publicationDate: "January 2025",
    reportPages: 78,
    verificationScore: 82,
    greenwashingRisk: "LOW",
    riskScore: 23,
    summary: "Nordic Aurora demonstrates industry-leading verification with granular hourly nodal energy matching and ISO 14040 server lifecycle LCA, though Tier 1 Asian chip supplier decarbonization requires enhanced contractual enforcement.",
    blockchainRecord: {
      blockNumber: 19830541,
      network: "TerraLens Climate Ledger (Polygon L2 Proof)",
      txHash: "0x12a884efb399d816a704e9c70281b3769910e54917a2283be0027f8a8461b209",
      merkleRoot: "0x77cb891a02e648f0714b7e802316e911284a7c0628e83b0f51945ae90e4390b1",
      timestamp: "2025-01-28T09:12:44Z",
      validatorCount: 26,
      status: "IMMUTABLE_VERIFIED"
    },
    riskDimensions: {
      offsetQuality: 15,
      scope3Coverage: 42,
      baselineIntegrity: 18,
      empiricalAlignment: 22,
      transparency: 16
    },
    claims: [
      {
        id: "na-claim-1",
        claimText: "Achieved 99.2% hourly carbon-free energy (24/7 CFE) matching for all Scandinavian and Nordic hyperscale data center facilities using local wind and run-of-river hydro.",
        category: "Renewable Electricity Procurement",
        pageReference: "Page 18, Clean Computing",
        verdict: "SUPPORTED",
        confidence: 99,
        confidenceReason: "Hourly Granular Certificates (GCs) certified by EnergyTag and Nord Pool nodal telemetry confirm minute-by-minute matching without annual unbundled averaging.",
        claimMetrics: {
          claimed: "99.2% Hourly Matched Clean Power",
          verified: "99.18% Independent Audit Match"
        },
        evidenceSources: [
          {
            name: "EnergyTag Standard Granular Registry & Svenska Kraftnät Telemetry",
            type: "Hourly Metered Ledger",
            finding: "Sub-hourly smart meter cryptographic certificates show data center power drew solely from certified renewable assets across 8,760 hours.",
            reliability: 99,
            link: "https://energytag.org"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "None (Best-In-Class Granular Verification)",
          mechanism: "Avoids generic annual EAC/REC greenwashing by adopting time-stamped and locational matching.",
          regulatoryWarning: "Fully aligns with UN 24/7 Carbon-Free Energy Compact guidelines."
        },
        evidenceFingerprint: "sha256:4901f409bc2984e72301fae8021c70e9a3182ef059812739ea02bb553818e471"
      },
      {
        id: "na-claim-2",
        claimText: "Reduced embodied server hardware emissions by 34% per compute petaflop through circular decommissioning and remanufactured modular motherboards.",
        category: "Hardware Lifecycle & Circularity",
        pageReference: "Page 32, Circular Tech",
        verdict: "SUPPORTED",
        confidence: 91,
        confidenceReason: "ISO 14040/14044 Life Cycle Assessment verified by DNV GL with complete physical bill of materials (BOM) traceability.",
        claimMetrics: {
          claimed: "-34% Embodied CO2 per PFLOPS",
          verified: "-32.8% verified cradle-to-gate reduction"
        },
        evidenceSources: [
          {
            name: "DNV GL Independent Assurance Statement (ISO 14044)",
            type: "Third-Party Audited LCA",
            finding: "Verified 28,000 server chassis remanufactured and re-deployed across secondary computing tiers.",
            reliability: 95,
            link: "https://dnv.com"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "None (Empirically Corroborated)",
          mechanism: "Physical refurbishment with material tracking passports.",
          regulatoryWarning: "Compliant with EU Ecodesign for Sustainable Products Regulation."
        },
        evidenceFingerprint: "sha256:5681023be699d821a004eb7c917240f90761e29aa4980bbd34201e56489a24bb"
      },
      {
        id: "na-claim-3",
        claimText: "100% of upstream semiconductor foundry partners have committed to SBTi 1.5°C approved decarbonization pathways for next-generation silicon production.",
        category: "Scope 3 Supply Chain",
        pageReference: "Page 50, Upstream Partners",
        verdict: "INSUFFICIENT EVIDENCE",
        confidence: 86,
        confidenceReason: "CDP Supply Chain filings show 2 out of 5 contracted Taiwanese and Korean packaging partners have only committed to well-below 2°C pathways or pending validation.",
        claimMetrics: {
          claimed: "100% SBTi 1.5°C Validated Partners",
          verified: "Only 58% spend volume certified to 1.5°C target"
        },
        evidenceSources: [
          {
            name: "Science Based Targets initiative (SBTi) Companies Taking Action Database",
            type: "International Target Registry",
            finding: "Key foundry supplier holds 'Target Committed' status rather than approved 1.5°C target; target formulation remains in development.",
            reliability: 98,
            link: "https://sciencebasedtargets.org"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Premature Target Claims",
          mechanism: "Conflating 'commitment to formulate' with 'formulated and validated SBTi target'.",
          regulatoryWarning: "Requires disclaimer under Corporate Sustainability Reporting Directive (CSRD) Scope 3 guidelines."
        },
        evidenceFingerprint: "sha256:9234bb09e5192803bba87c295712ef902b74051a877e6992d40901e85561a052"
      }
    ]
  },
  {
    id: "titan-apparel",
    companyName: "Titan Apparel Worldwide",
    ticker: "TAW-NYSE",
    sector: "Retail & Consumer Goods",
    reportTitle: "Impact Report 2024: Circular Materials & Zero Harm",
    publicationDate: "December 2024",
    reportPages: 86,
    verificationScore: 42,
    greenwashingRisk: "HIGH",
    riskScore: 71,
    summary: "Titan marketed its flagship 'EcoWeave' capsule collection as '100% post-consumer recycled textile waste', yet chemical isotope forensics and customs manifests indicate the fabric blend consists of 76% virgin synthetic polyester.",
    blockchainRecord: {
      blockNumber: 19839440,
      network: "TerraLens Climate Ledger (Polygon L2 Proof)",
      txHash: "0x992fb47a1188402ee384a51e624c905389a01bb45019d83b519ef763901bca11",
      merkleRoot: "0x89bb40283c7491024bb883e60293ea5b018510c490e81749ba0281b37490fae1",
      timestamp: "2024-12-18T14:28:11Z",
      validatorCount: 20,
      status: "IMMUTABLE_VERIFIED"
    },
    riskDimensions: {
      offsetQuality: 65,
      scope3Coverage: 78,
      baselineIntegrity: 62,
      empiricalAlignment: 82,
      transparency: 69
    },
    claims: [
      {
        id: "ta-claim-1",
        claimText: "Our flagship 'EcoWeave' global apparel line is crafted exclusively from 100% post-consumer recycled textile waste and ocean-bound plastics.",
        category: "Recycled Materials & Circularity",
        pageReference: "Page 12, Material Innovation",
        verdict: "CONTRADICTED",
        confidence: 97,
        confidenceReason: "Lab spectroscopic mass spectrometry tests and Global Recycled Standard (GRS) transaction certificates show average fiber content is 76% virgin petrochemical polyester.",
        claimMetrics: {
          claimed: "100% Post-Consumer Recycled Fabric",
          verified: "76% Virgin Polyester / 24% Mechanically Downcycled Cotton"
        },
        evidenceSources: [
          {
            name: "Textile Forensic Mass Spectrometry & Isotope Ratio Analysis",
            type: "Independent Laboratory Testing",
            finding: "Polymer chain integrity testing confirmed virgin petroleum monomer structure with no post-consumer thermal degradation markers.",
            reliability: 98,
            link: "https://textileforensics.org"
          },
          {
            name: "Textile Exchange GRS Transaction Certificate Repository",
            type: "Supply Chain Chain-of-Custody",
            finding: "Audited mill invoices reveal 180 tonnes of virgin PET pellets purchased alongside 40 tonnes of secondary recycled flake.",
            reliability: 95,
            link: "https://textileexchange.org"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Misleading Labeling & Fraudulent Green Marketing",
          mechanism: "Mass-balance accounting misapplied to physical garment claims; misleading marketing of small capsule pilot as standard collection.",
          regulatoryWarning: "Direct violation of US FTC Green Guides (16 CFR Part 260) and EU Consumer Rights Directive."
        },
        evidenceFingerprint: "sha256:7198bb03ea2981774029eb104529d89163a812bca01e85091724bf3901ba772a"
      },
      {
        id: "ta-claim-2",
        claimText: "Reduced single-use transit plastic packaging by 54% across worldwide omnichannel distribution fulfillment hubs.",
        category: "Packaging & Waste Reduction",
        pageReference: "Page 41, Packaging Stewardship",
        verdict: "SUPPORTED",
        confidence: 93,
        confidenceReason: "Customs shipping manifest weigh-ins and audited procurement orders for FSC-certified paper mailers verify substantial reduction in LDPE polybags.",
        claimMetrics: {
          claimed: "-54% Plastic Packaging Weight",
          verified: "-52.6% Verified Reduction"
        },
        evidenceSources: [
          {
            name: "PwC Third-Party Non-Financial Assurance Report",
            type: "Assurance Opinion",
            finding: "Verified conversion of 14 distribution centers from polyethylene polybags to recycled paper water-activated mailers.",
            reliability: 96,
            link: "https://pwc.com/sustainability"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "None (Empirically Corroborated)",
          mechanism: "Measurable direct procurement shift with clear mass receipts.",
          regulatoryWarning: "Meets Packaging and Packaging Waste Regulation (PPWR) benchmarks."
        },
        evidenceFingerprint: "sha256:109403aeb78d91117498c0be8d91a629fba713cd549021e8430a9c82115fbe84"
      },
      {
        id: "ta-claim-3",
        claimText: "Zero discharge of hazardous synthetic dyestuffs across all Tier 2 fabric wet processing facilities in Southeast Asia.",
        category: "Toxic Chemical Discharge",
        pageReference: "Page 56, Water Protection",
        verdict: "INSUFFICIENT EVIDENCE",
        confidence: 88,
        confidenceReason: "ZDHC Gateway public disclosure records show effluent wastewater tests conducted for only 14 of 168 contracted dyeing and washing mills.",
        claimMetrics: {
          claimed: "100% Zero Hazardous Discharge Across Supply Chain",
          verified: "Only 8.3% of contracted wet mills tested and disclosed"
        },
        evidenceSources: [
          {
            name: "ZDHC (Zero Discharge of Hazardous Chemicals) Gateway Portal",
            type: "Chemical Transparency Registry",
            finding: "Massive disclosure vacuum: 154 sub-tier facilities in Bangladesh, Vietnam, and Indonesia lack published wastewater ClearStream reports.",
            reliability: 94,
            link: "https://roadmaptozero.com"
          }
        ],
        agentAnalysis: {
          inconsistencyType: "Selective Sampling & Scope Omission",
          mechanism: "Extrapolating spotless results from top 8% of premier suppliers to entire opaque sub-tier manufacturing base.",
          regulatoryWarning: "Non-compliant with German Supply Chain Due Diligence Act (LkSG)."
        },
        evidenceFingerprint: "sha256:6630f9a28c117d91e028b37490fae189bb40283c7491024bb883e60293ea5b01"
      }
    ]
  }
];

export const AI_AGENTS_CONFIG = [
  {
    id: "extractor",
    name: "Claim Extraction Agent",
    role: "NLP Semantic Parser & Boundary Identifier",
    icon: "FileSearch",
    status: "STANDBY",
    description: "Extracts quantitative promises, baseline years, emission scopes (Scope 1, 2, 3), and hedging language from sustainability text."
  },
  {
    id: "retriever",
    name: "Independent Telemetry Agent",
    role: "Satellite & Registry Ingestion",
    icon: "Satellite",
    status: "STANDBY",
    description: "Fetches ground-truth data from Copernicus Sentinel-2/5P, EPA CAMD, NOAA VIIRS, EnergyTag, and SBTi databases."
  },
  {
    id: "verifier",
    name: "Cross-Verification & Inconsistency Engine",
    role: "Discrepancy Forensics",
    icon: "GitCompare",
    status: "STANDBY",
    description: "Correlates corporate assertions against empirical telemetry, calculating delta variances and identifying phantom offsets or asset dumping."
  },
  {
    id: "scorer",
    name: "Greenwashing Risk Assessor",
    role: "Multidimensional Risk Modeling",
    icon: "ShieldAlert",
    status: "STANDBY",
    description: "Evaluates offset additionality, Scope 3 coverage, and regulatory compliance risks under EU Green Claims and SEC guidelines."
  },
  {
    id: "notary",
    name: "Blockchain Cryptographic Notary",
    role: "Tamper-Evident Ledger Inscription",
    icon: "Binary",
    status: "STANDBY",
    description: "Computes SHA-256 evidence fingerprints, constructs Merkle proofs, and notarizes audit results to immutable distributed ledger."
  }
];

export const SECTOR_BENCHMARKS = [
  { sector: "Aviation & Logistics", avgRiskScore: 74, contradictedRate: "62%", supportedRate: "21%", insufficientRate: "17%", primaryLoophole: "Phantom nature-based offsets & vague SAF MoUs" },
  { sector: "Oil, Gas & Utilities", avgRiskScore: 81, contradictedRate: "71%", supportedRate: "16%", insufficientRate: "13%", primaryLoophole: "Asset divestment / Scope 1 shifting & unmetered flaring" },
  { sector: "Fast Fashion & Apparel", avgRiskScore: 68, contradictedRate: "58%", supportedRate: "24%", insufficientRate: "18%", primaryLoophole: "Mass balance recycled claims & Tier 2 wet-mill opacity" },
  { sector: "Tech & Data Centers", avgRiskScore: 31, contradictedRate: "18%", supportedRate: "66%", insufficientRate: "16%", primaryLoophole: "Scope 3 Category 1 semiconductor supply chain lag" },
  { sector: "Automotive & Mobility", avgRiskScore: 59, contradictedRate: "46%", supportedRate: "38%", insufficientRate: "16%", primaryLoophole: "Battery mineral lifecycle omission & real-world tailpipe delta" }
];

export const LIVE_LEDGER_FEED = [
  {
    block: 19842104,
    company: "AeroGlobal SkyWays Group",
    claimSnippet: "100% net-zero flights via carbon offsets",
    verdict: "CONTRADICTED",
    fingerprint: "0x8e71b2d9a5f4...a0b1c94d",
    timestamp: "2 mins ago",
    status: "COMMITTED"
  },
  {
    block: 19839440,
    company: "Titan Apparel Worldwide",
    claimSnippet: "EcoWeave 100% post-consumer recycled textile",
    verdict: "CONTRADICTED",
    fingerprint: "0x992fb47a1188...01bca11",
    timestamp: "18 mins ago",
    status: "COMMITTED"
  },
  {
    block: 19830541,
    company: "Nordic Aurora Tech AB",
    claimSnippet: "99.2% hourly 24/7 carbon-free energy matching",
    verdict: "SUPPORTED",
    fingerprint: "0x12a884efb399...8461b209",
    timestamp: "1 hour ago",
    status: "COMMITTED"
  },
  {
    block: 19821800,
    company: "Verdant Energy Corp",
    claimSnippet: "65% Scope 1 coal phaseout elimination",
    verdict: "CONTRADICTED",
    fingerprint: "0x3f5c7199b014...2170cc31",
    timestamp: "3 hours ago",
    status: "COMMITTED"
  },
  {
    block: 19819230,
    company: "Helios Solar Dynamics",
    claimSnippet: "Zero Tier 1 polysilicon forced labor trace",
    verdict: "SUPPORTED",
    fingerprint: "0x5198e3b01851...771092ef",
    timestamp: "5 hours ago",
    status: "COMMITTED"
  }
];
