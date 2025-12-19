import React, { useState } from 'react';
import { ChevronDown, Building2, Building, Users, User, Quote, Sparkles, BarChart3, ArrowUpRight } from 'lucide-react';

const data = {
  enterprise: {
    name: "Enterprise",
    subtitle: "25+ seats",
    count: 269,
    percentage: "21%",
    icon: Building2,
    gradient: "linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)",
    accent: "#334155",
    accentLight: "#64748B",
    theme: "Admin & Security Controls",
    requests: [
      { rank: 1, feature: "SCIM/Okta provisioning", priority: "Critical", quote: "SCIM provisioning from Okta would be nice so we can control licensing directly from our Okta admin console.", customer: "brandon.kern@coterieinsurance.com" },
      { rank: 2, feature: "Granular admin roles", priority: "Critical", quote: "Role based access control - Having an admin account that allows configuration but does not allow seeing all meetings.", customer: "brandon.kern@coterieinsurance.com" },
      { rank: 3, feature: "Team-level compliance override", priority: "Critical", quote: "Set meeting compliance settings on a Team basis that would override any user settings.", customer: "brandon.kern@coterieinsurance.com" },
      { rank: 4, feature: "Block personal email usage", priority: "Critical", quote: "I need to ensure fireflies is only from our team. I noticed an employee using fireflies with their personal email.", customer: "arelis@arialogistics.com" },
      { rank: 5, feature: "Full API access to org data", priority: "Critical", quote: "Having super admin role just to access all my org's meetings via API seems kind of greedy.", customer: "ami@oversee.biz" },
      { rank: 6, feature: "Analytics export for leadership", priority: "High", quote: "I would like to extract the analytics to share with the management team.", customer: "andrew.stanwell@rocp.com" },
      { rank: 7, feature: "Usage statistics per user", priority: "High", quote: "I need statistics regarding usage: how often users sign in and how often each user records meetings.", customer: "bcastine@homewardhealth.com" },
      { rank: 8, feature: "Product context for AI Apps", priority: "Medium", quote: "Upload a description of our product so AI has greater context when looking for features.", customer: "brendan@goideally.com" },
      { rank: 9, feature: "Store AskFred outputs", priority: "Medium", quote: "AskFred output should be stored at the meeting level.", customer: "abhishek.c@fireflies.ai" },
      { rank: 10, feature: "Conditional AI follow-up triggers", priority: "Medium", quote: "Ability to assign follow up action only if criteria is met.", customer: "jr.oakes@locomotive.agency" }
    ]
  },
  smb_large: {
    name: "SMB",
    subtitle: "6-25 seats",
    count: 410,
    percentage: "33%",
    icon: Building,
    gradient: "linear-gradient(135deg, #0D9488 0%, #14B8A6 50%, #2DD4BF 100%)",
    accent: "#0D9488",
    accentLight: "#14B8A6",
    theme: "Workflow & Integrations",
    requests: [
      { rank: 1, feature: "Copy transcript button", priority: "Critical", quote: "Please add a 'copy' button that copies the transcript into TXT. I am tired of downloading word docs.", customer: "andre@flywayhealth.com" },
      { rank: 2, feature: "AND logic for participant search", priority: "Critical", quote: "When searching by participants, it would be useful to search with AND instead of OR.", customer: "fox@atarim.io" },
      { rank: 3, feature: "Sync only MY tasks", priority: "Critical", quote: "I want to send only my action items to Asana. Not my customer's action items.", customer: "jacint.lazok@prerender.io" },
      { rank: 4, feature: "HubSpot meeting filtering", priority: "Critical", quote: "Fireflies is logging every single thing to HubSpot. I want it to log only specific meetings.", customer: "botty.dimanov@tenyks.ai" },
      { rank: 5, feature: "Video playback speed control", priority: "High", quote: "There needs to be ability to watch video at 1.25x 1.5x speeds. Every other AI notetaker has this.", customer: "anthony@harounventures.com" },
      { rank: 6, feature: "On-demand AI Apps only", priority: "High", quote: "I don't want AI Apps applied to meetings by default. Apply on demand only.", customer: "chris@link.com.au" },
      { rank: 7, feature: "Slack message customization", priority: "Medium", quote: "The notes messages going to Slack are way too long.", customer: "andy.sietsema@flightschedulepro.com" },
      { rank: 8, feature: "Clearer onboarding consent flow", priority: "Medium", quote: "The onboarding feels like a simple next/accept flow rather than encouraging a meaningful decision.", customer: "10ainote01@profine-group.com" },
      { rank: 9, feature: "AskFred within specific channels", priority: "Medium", quote: "I would love to ask Fred within the context of a specific channel.", customer: "ldauriagupta@pypestream.com" },
      { rank: 10, feature: "Calendar-based meeting navigation", priority: "Medium", quote: "Search function is lacking a calendar feature.", customer: "cassandra@livesolutionsnow.com" }
    ]
  },
  smb_small: {
    name: "SMB",
    subtitle: "<6 seats",
    count: 146,
    percentage: "12%",
    icon: Users,
    gradient: "linear-gradient(135deg, #EA580C 0%, #F97316 50%, #FB923C 100%)",
    accent: "#EA580C",
    accentLight: "#F97316",
    theme: "Flexible Licensing",
    requests: [
      { rank: 1, feature: "Mixed license types per team", priority: "Critical", quote: "I would like the ability to assign different types of licenses to my teammates.", customer: "10ainote01@profine-group.com" },
      { rank: 2, feature: "Disable users without removing", priority: "High", quote: "It would be convenient to temporarily disable users while keeping them in the team.", customer: "10ainote01@profine-group.com" },
      { rank: 3, feature: "Notion database support", priority: "High", quote: "I would like to add meeting notes to a Notion database, not just as a sub-page.", customer: "andrew@hvakr.com" },
      { rank: 4, feature: "Auto-extract meeting title", priority: "Medium", quote: "Meeting title should be extracted from the Meeting itself. Right now it comes as untitled.", customer: "ai_notes_test@sunrise.co" },
      { rank: 5, feature: "Dark mode", priority: "Medium", quote: "I would love a dark mode to match with my system preferences.", customer: "svdtoorren@fbgroup.nl" },
      { rank: 6, feature: "Meeting deletion via API", priority: "Medium", quote: "We miss the possibility to delete a meeting using the API.", customer: "bertrand@centre-national-agroecologie.fr" },
      { rank: 7, feature: "Offline audio download", priority: "Medium", quote: "Would love to download audio for calls so I can listen while walking without data.", customer: "jessie@xenplatforms.com" },
      { rank: 8, feature: "Confidential folder for CEO", priority: "Medium", quote: "I'm the CEO and I can't have confidential recordings show up where all teammates can view.", customer: "alex@door3.com" },
      { rank: 9, feature: "Sync only MY tasks to Jira", priority: "Medium", quote: "There should be option to sync only my tasks.", customer: "vassilis@infiterra.com" },
      { rank: 10, feature: "Manual agenda & notes space", priority: "Low", quote: "I need a place to add agenda items and take manual notes during meeting.", customer: "ashley.rafalow@coactive.com" }
    ]
  },
  individual: {
    name: "Individual",
    subtitle: "Single users",
    count: 430,
    percentage: "34%",
    icon: User,
    gradient: "linear-gradient(135deg, #0284C7 0%, #0EA5E9 50%, #38BDF8 100%)",
    accent: "#0284C7",
    accentLight: "#0EA5E9",
    theme: "Transcript Quality",
    requests: [
      { rank: 1, feature: "Auto-detect language mid-meeting", priority: "Critical", quote: "The meeting spontaneously switched to German. Transcript is useless.", customer: "antonio@mbold.io" },
      { rank: 2, feature: "Side-by-side translation view", priority: "High", quote: "I'd like to see the transcript in another language on a tab.", customer: "wilmer070@gmail.com" },
      { rank: 3, feature: "AskFred beyond 30 days", priority: "High", quote: "Why can't I use AskFred for longer than 30 days?", customer: "acw@qampo.com" },
      { rank: 4, feature: "Speaker label persistence", priority: "High", quote: "If I label a speaker, that should carry over to all meetings.", customer: "ascorper@gmail.com" },
      { rank: 5, feature: "Edit/trim meeting recordings", priority: "Medium", quote: "It would be useful to modify meetings and cut out certain parts.", customer: "arsen.nikitindigital@gmail.com" },
      { rank: 6, feature: "Custom vocabulary for uploads", priority: "Medium", quote: "Custom vocabulary is not referenced for uploaded audio files.", customer: "alkilpel@outlook.com" },
      { rank: 7, feature: "Formatted download option", priority: "Medium", quote: "When I download the summary, they are unformatted.", customer: "avery.chan@interlinkmanagement.net" },
      { rank: 8, feature: "iOS Shortcuts integration", priority: "Low", quote: "With Otter AI you can use iOS Shortcuts to start recording.", customer: "philwhite90@gmail.com" },
      { rank: 9, feature: "Tag/label meetings", priority: "Low", quote: "I'd love to be able to tag calls for clients vs prospects.", customer: "ask@megangerhartcpa.com" },
      { rank: 10, feature: "Custom branding on exports", priority: "Low", quote: "Add company logo to the meeting summary PDF.", customer: "chris@bluntsecurity.uk" }
    ]
  }
};

const priorityStyles = {
  Critical: { bg: '#FEE2E2', color: '#B91C1C', border: '#FECACA' },
  High: { bg: '#FEF3C7', color: '#B45309', border: '#FDE68A' },
  Medium: { bg: '#F1F5F9', color: '#475569', border: '#E2E8F0' },
  Low: { bg: '#F8FAFC', color: '#64748B', border: '#F1F5F9' }
};

const FeatureCard = ({ request, accent }) => {
  const [expanded, setExpanded] = useState(false);
  const priority = priorityStyles[request.priority];

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '12px',
        marginBottom: '10px',
        boxShadow: expanded
          ? '0 10px 30px -8px rgba(0,0,0,0.12)'
          : '0 1px 3px rgba(0,0,0,0.06)',
        border: '1px solid #E2E8F0',
        borderLeft: `3px solid ${accent}`,
        transform: expanded ? 'scale(1.005)' : 'scale(1)',
        transition: 'all 0.25s ease',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          padding: '14px 16px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif'
        }}
      >
        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: `${accent}10`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          fontSize: '13px',
          color: accent,
          flexShrink: 0
        }}>
          {request.rank}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontWeight: '500',
            fontSize: '14px',
            color: '#1E293B',
            lineHeight: '1.4',
            marginBottom: '6px',
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            {request.feature}
          </div>
          <span style={{
            display: 'inline-block',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '10px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.3px',
            background: priority.bg,
            color: priority.color,
            border: `1px solid ${priority.border}`,
            fontFamily: 'Inter, -apple-system, sans-serif'
          }}>
            {request.priority}
          </span>
        </div>

        <ChevronDown
          size={16}
          style={{
            color: '#94A3B8',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.25s ease',
            flexShrink: 0,
            marginTop: '2px'
          }}
        />
      </button>

      {expanded && (
        <div style={{ padding: '0 16px 14px' }}>
          <div style={{
            background: '#F8FAFC',
            borderRadius: '8px',
            padding: '12px',
            borderLeft: `2px solid ${accent}`
          }}>
            <Quote
              size={14}
              style={{
                color: accent,
                opacity: 0.4,
                marginBottom: '6px'
              }}
            />
            <p style={{
              fontSize: '13px',
              color: '#475569',
              fontStyle: 'italic',
              lineHeight: '1.55',
              margin: 0,
              fontFamily: 'Inter, -apple-system, sans-serif'
            }}>
              "{request.quote}"
            </p>
            <div style={{
              marginTop: '10px',
              paddingTop: '10px',
              borderTop: '1px solid #E2E8F0',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: accent,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '9px',
                fontWeight: '600',
                fontFamily: 'Inter, sans-serif'
              }}>
                {request.customer.charAt(0).toUpperCase()}
              </div>
              <span style={{
                fontSize: '11px',
                color: '#94A3B8',
                fontFamily: 'SF Mono, Monaco, monospace',
                letterSpacing: '-0.2px'
              }}>
                {request.customer}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SegmentSection = ({ segment, isOpen, onToggle }) => {
  const Icon = segment.icon;

  return (
    <div style={{ marginBottom: '16px' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          background: segment.gradient,
          borderRadius: '16px',
          padding: '18px 20px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: `0 4px 20px -4px ${segment.accent}40`,
          transition: 'all 0.25s ease',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)'
        }} />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Icon size={22} color="white" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontWeight: '700',
                fontSize: '17px',
                color: 'white',
                letterSpacing: '-0.3px',
                fontFamily: 'Inter, -apple-system, sans-serif'
              }}>
                {segment.name}
              </div>
              <div style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.75)',
                fontWeight: '500',
                fontFamily: 'Inter, sans-serif'
              }}>
                {segment.subtitle}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: '26px',
                fontWeight: '700',
                color: 'white',
                lineHeight: 1,
                fontFamily: 'Inter, sans-serif'
              }}>
                {segment.count}
              </div>
              <div style={{
                fontSize: '10px',
                color: 'rgba(255,255,255,0.6)',
                fontWeight: '500',
                letterSpacing: '0.3px',
                fontFamily: 'Inter, sans-serif'
              }}>
                {segment.percentage} of total
              </div>
            </div>
            <ChevronDown
              size={20}
              color="white"
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.25s ease',
                opacity: 0.8
              }}
            />
          </div>
        </div>
      </button>

      {isOpen && (
        <div style={{
          marginTop: '10px',
          background: '#FAFAFA',
          borderRadius: '14px',
          padding: '14px',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '12px',
            paddingLeft: '2px'
          }}>
            <BarChart3 size={12} color={segment.accent} />
            <span style={{
              fontSize: '10px',
              fontWeight: '600',
              color: segment.accent,
              textTransform: 'uppercase',
              letterSpacing: '0.8px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Top 10 Requests
            </span>
          </div>

          {segment.requests.map((request) => (
            <FeatureCard
              key={request.rank}
              request={request}
              accent={segment.accent}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FeatureRequestsDashboard() {
  const [openSegments, setOpenSegments] = useState({ enterprise: true });

  const toggleSegment = (key) => {
    setOpenSegments(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const totalRequests = Object.values(data).reduce((sum, seg) => sum + seg.count, 0);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        padding: '24px 20px 28px',
        borderBottom: '1px solid #E2E8F0'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '20px'
        }}>
          <div>
            <h1 style={{
              fontSize: '24px',
              fontWeight: '700',
              color: '#0F172A',
              margin: 0,
              letterSpacing: '-0.5px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Feature Requests
            </h1>
            <p style={{
              fontSize: '13px',
              color: '#64748B',
              margin: '4px 0 0',
              fontWeight: '400',
              fontFamily: 'Inter, sans-serif'
            }}>
              Customer insights by segment
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#0F172A',
              lineHeight: 1,
              fontFamily: 'Inter, sans-serif'
            }}>
              {totalRequests.toLocaleString()}
            </div>
            <div style={{
              fontSize: '10px',
              color: '#94A3B8',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginTop: '2px',
              fontFamily: 'Inter, sans-serif'
            }}>
              Total Requests
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px'
        }}>
          {Object.entries(data).map(([key, seg]) => (
            <div
              key={key}
              style={{
                background: 'white',
                borderRadius: '10px',
                padding: '12px 10px',
                textAlign: 'center',
                border: '1px solid #E2E8F0',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1E293B',
                fontFamily: 'Inter, sans-serif'
              }}>
                {seg.count}
              </div>
              <div style={{
                fontSize: '9px',
                color: '#94A3B8',
                fontWeight: '500',
                marginTop: '2px',
                fontFamily: 'Inter, sans-serif'
              }}>
                {seg.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Themes */}
      <div style={{ padding: '16px 16px 8px' }}>
        <div style={{
          background: 'white',
          borderRadius: '14px',
          padding: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          border: '1px solid #E2E8F0'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px'
          }}>
            <ArrowUpRight size={14} color="#0F172A" />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#0F172A',
              fontFamily: 'Inter, sans-serif'
            }}>
              Key Themes
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries(data).map(([key, seg]) => (
              <div key={key} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: seg.accent,
                  flexShrink: 0
                }} />
                <span style={{
                  fontSize: '11px',
                  color: '#94A3B8',
                  fontWeight: '500',
                  width: '65px',
                  flexShrink: 0,
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {seg.subtitle}
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#334155',
                  fontWeight: '500',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {seg.theme}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segments */}
      <div style={{ padding: '8px 16px 24px' }}>
        {Object.entries(data).map(([key, segment]) => (
          <SegmentSection
            key={key}
            segment={segment}
            isOpen={openSegments[key]}
            onToggle={() => toggleSegment(key)}
          />
        ))}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: 'center',
        padding: '0 20px 28px'
      }}>
        <p style={{
          fontSize: '11px',
          color: '#94A3B8',
          margin: 0,
          fontFamily: 'Inter, sans-serif'
        }}>
          Analysis of 3,552 customer feedback entries
        </p>
        <p style={{
          fontSize: '10px',
          color: '#CBD5E1',
          margin: '4px 0 0',
          fontFamily: 'Inter, sans-serif'
        }}>
          Tap segments to expand • Tap requests for quotes
        </p>
      </div>
    </div>
  );
}
