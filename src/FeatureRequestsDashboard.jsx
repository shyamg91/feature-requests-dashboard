import React, { useState } from 'react';
import { ChevronDown, Building2, Building, Users, User, Quote, BarChart3, TrendingUp, Zap } from 'lucide-react';

const data = {
  enterprise: {
    name: "Enterprise",
    subtitle: "25+ seats",
    count: 269,
    percentage: "21%",
    icon: Building2,
    gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
    accent: "#6366F1",
    accentLight: "#818CF8",
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
    gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
    accent: "#10B981",
    accentLight: "#34D399",
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
    gradient: "linear-gradient(135deg, #EA580C 0%, #F97316 100%)",
    accent: "#F97316",
    accentLight: "#FB923C",
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
    gradient: "linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)",
    accent: "#8B5CF6",
    accentLight: "#A78BFA",
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
  Critical: { bg: 'rgba(239, 68, 68, 0.1)', color: '#DC2626', border: 'rgba(239, 68, 68, 0.2)' },
  High: { bg: 'rgba(245, 158, 11, 0.1)', color: '#D97706', border: 'rgba(245, 158, 11, 0.2)' },
  Medium: { bg: 'rgba(100, 116, 139, 0.1)', color: '#475569', border: 'rgba(100, 116, 139, 0.15)' },
  Low: { bg: 'rgba(148, 163, 184, 0.1)', color: '#64748B', border: 'rgba(148, 163, 184, 0.15)' }
};

const FeatureCard = ({ request, accent }) => {
  const [expanded, setExpanded] = useState(false);
  const priority = priorityStyles[request.priority];

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '16px',
        marginBottom: '12px',
        boxShadow: expanded
          ? '0 20px 40px -12px rgba(0,0,0,0.15)'
          : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        border: '1px solid rgba(0,0,0,0.06)',
        transform: expanded ? 'scale(1.01)' : 'scale(1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '3px',
          background: `linear-gradient(180deg, ${accent} 0%, ${accent}88 100%)`,
          borderRadius: '3px 0 0 3px'
        }}
      />
      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          width: '100%',
          padding: '16px 18px 16px 20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '14px',
          fontFamily: 'Inter, sans-serif'
        }}
      >
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: `linear-gradient(135deg, ${accent}15 0%, ${accent}08 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: '600',
          fontSize: '14px',
          color: accent,
          flexShrink: 0,
          border: `1px solid ${accent}20`
        }}>
          {request.rank}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontWeight: '500',
            fontSize: '14px',
            color: '#1E293B',
            lineHeight: '1.5',
            marginBottom: '8px',
            letterSpacing: '-0.01em'
          }}>
            {request.feature}
          </div>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '11px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            background: priority.bg,
            color: priority.color,
            border: `1px solid ${priority.border}`
          }}>
            {request.priority}
          </span>
        </div>

        <ChevronDown
          size={18}
          style={{
            color: '#94A3B8',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            flexShrink: 0,
            marginTop: '4px'
          }}
        />
      </button>

      <div style={{
        maxHeight: expanded ? '300px' : '0',
        opacity: expanded ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{ padding: '0 18px 16px 20px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            borderRadius: '12px',
            padding: '16px',
            position: 'relative'
          }}>
            <Quote
              size={32}
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                color: accent,
                opacity: 0.15
              }}
            />
            <p style={{
              fontSize: '13px',
              color: '#475569',
              fontStyle: 'italic',
              lineHeight: '1.7',
              margin: 0,
              paddingLeft: '28px',
              position: 'relative',
              zIndex: 1
            }}>
              "{request.quote}"
            </p>
            <div style={{
              marginTop: '14px',
              paddingTop: '14px',
              borderTop: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '8px',
                background: `linear-gradient(135deg, ${accent} 0%, ${accent}CC 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '11px',
                fontWeight: '600',
                boxShadow: `0 2px 8px ${accent}40`
              }}>
                {request.customer.charAt(0).toUpperCase()}
              </div>
              <span style={{
                fontSize: '12px',
                color: '#64748B',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '-0.3px'
              }}>
                {request.customer}
              </span>
            </div>
          </div>
        </div>
      </div>
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
          borderRadius: '20px',
          padding: '20px 22px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: `0 8px 32px -8px ${segment.accent}50`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.08)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '30%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)'
        }} />

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <Icon size={24} color="white" strokeWidth={1.5} />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontWeight: '600',
                fontSize: '18px',
                color: 'white',
                letterSpacing: '-0.02em'
              }}>
                {segment.name}
              </div>
              <div style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: '500',
                marginTop: '2px'
              }}>
                {segment.subtitle}
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: 'white',
                lineHeight: 1,
                letterSpacing: '-0.03em'
              }}>
                {segment.count}
              </div>
              <div style={{
                fontSize: '11px',
                color: 'rgba(255,255,255,0.6)',
                fontWeight: '500',
                letterSpacing: '0.02em',
                marginTop: '4px'
              }}>
                {segment.percentage} of total
              </div>
            </div>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '10px',
              background: 'rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <ChevronDown
                size={18}
                color="white"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              />
            </div>
          </div>
        </div>
      </button>

      <div style={{
        maxHeight: isOpen ? '2000px' : '0',
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div style={{
          marginTop: '12px',
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
          borderRadius: '18px',
          padding: '18px',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
            paddingLeft: '4px'
          }}>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '8px',
              background: `linear-gradient(135deg, ${segment.accent}15 0%, ${segment.accent}08 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <BarChart3 size={14} color={segment.accent} />
            </div>
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              color: '#1E293B',
              letterSpacing: '0.02em'
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
      </div>
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
      background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
        padding: '28px 20px 32px',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '24px'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '6px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
              }}>
                <Zap size={18} color="white" strokeWidth={2} />
              </div>
              <h1 style={{
                fontSize: '26px',
                fontWeight: '700',
                color: '#0F172A',
                margin: 0,
                letterSpacing: '-0.03em'
              }}>
                Feature Requests
              </h1>
            </div>
            <p style={{
              fontSize: '14px',
              color: '#64748B',
              margin: '0 0 0 42px',
              fontWeight: '400',
              letterSpacing: '-0.01em'
            }}>
              Customer insights by segment
            </p>
          </div>
          <div style={{
            textAlign: 'right',
            background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
            padding: '12px 16px',
            borderRadius: '14px',
            border: '1px solid rgba(0,0,0,0.06)'
          }}>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#0F172A',
              lineHeight: 1,
              letterSpacing: '-0.03em'
            }}>
              {totalRequests.toLocaleString()}
            </div>
            <div style={{
              fontSize: '11px',
              color: '#94A3B8',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginTop: '4px'
            }}>
              Total Requests
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px'
        }}>
          {Object.entries(data).map(([key, seg]) => (
            <div
              key={key}
              style={{
                background: 'white',
                borderRadius: '14px',
                padding: '14px 12px',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1E293B',
                letterSpacing: '-0.02em'
              }}>
                {seg.count}
              </div>
              <div style={{
                fontSize: '10px',
                color: '#94A3B8',
                fontWeight: '500',
                marginTop: '4px',
                letterSpacing: '0.02em'
              }}>
                {seg.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Themes */}
      <div style={{ padding: '20px 16px 12px' }}>
        <div style={{
          background: 'white',
          borderRadius: '18px',
          padding: '18px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)',
          border: '1px solid rgba(0,0,0,0.06)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px'
          }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TrendingUp size={14} color="white" />
            </div>
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#0F172A',
              letterSpacing: '-0.01em'
            }}>
              Key Themes
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.entries(data).map(([key, seg]) => (
              <div key={key} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 12px',
                background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
                borderRadius: '10px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${seg.accent} 0%, ${seg.accentLight} 100%)`,
                  flexShrink: 0,
                  boxShadow: `0 2px 6px ${seg.accent}40`
                }} />
                <span style={{
                  fontSize: '12px',
                  color: '#64748B',
                  fontWeight: '500',
                  width: '75px',
                  flexShrink: 0
                }}>
                  {seg.subtitle}
                </span>
                <span style={{
                  fontSize: '13px',
                  color: '#1E293B',
                  fontWeight: '500',
                  letterSpacing: '-0.01em'
                }}>
                  {seg.theme}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Segments */}
      <div style={{ padding: '8px 16px 32px' }}>
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
        padding: '0 20px 36px'
      }}>
        <p style={{
          fontSize: '12px',
          color: '#94A3B8',
          margin: 0,
          fontWeight: '500'
        }}>
          Analysis of 3,552 customer feedback entries
        </p>
        <p style={{
          fontSize: '11px',
          color: '#CBD5E1',
          margin: '6px 0 0'
        }}>
          Tap segments to expand • Tap requests for quotes
        </p>
      </div>
    </div>
  );
}
