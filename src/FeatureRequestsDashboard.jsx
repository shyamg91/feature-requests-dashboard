import React, { useState } from 'react';
import { ChevronDown, Building2, Building, Users, User, Quote, BarChart3, ArrowUpRight, Tag, Hash, X } from 'lucide-react';

const data = {
  enterprise: {
    name: "Enterprise",
    subtitle: "25+ seats",
    count: 269,
    percentage: "21%",
    icon: Building2,
    gradient: "linear-gradient(135deg, #1E293B 0%, #334155 50%, #475569 100%)",
    accent: "#334155",
    theme: "Admin & Security Controls",
    requests: [
      { rank: 1, feature: "SCIM/Okta provisioning", priority: "Critical", mentions: 5, category: "Controls & Permissions", quote: "SCIM provisioning from Okta would be nice so we can control licensing directly from our Okta admin console.", customer: "brandon.kern@coterieinsurance.com" },
      { rank: 2, feature: "Granular admin roles", priority: "Critical", mentions: 12, category: "Controls & Permissions", quote: "Role based access control - Having an admin account that allows configuration but does not allow seeing all meetings.", customer: "brandon.kern@coterieinsurance.com" },
      { rank: 3, feature: "Team-level compliance override", priority: "Critical", mentions: 34, category: "Controls & Permissions", quote: "Set meeting compliance settings on a Team basis that would override any user settings.", customer: "brandon.kern@coterieinsurance.com" },
      { rank: 4, feature: "Block personal email usage", priority: "Critical", mentions: 44, category: "Security & Privacy", quote: "I need to ensure fireflies is only from our team. I noticed an employee using fireflies with their personal email.", customer: "arelis@arialogistics.com" },
      { rank: 5, feature: "Full API access to org data", priority: "Critical", mentions: 56, category: "Feature Requests", quote: "Having super admin role just to access all my org's meetings via API seems kind of greedy.", customer: "ami@oversee.biz" },
      { rank: 6, feature: "Analytics export for leadership", priority: "High", mentions: 2, category: "Feature Requests", quote: "I would like to extract the analytics to share with the management team.", customer: "andrew.stanwell@rocp.com" },
      { rank: 7, feature: "Usage statistics per user", priority: "High", mentions: 7, category: "Feature Requests", quote: "I need statistics regarding usage: how often users sign in and how often each user records meetings.", customer: "bcastine@homewardhealth.com" },
      { rank: 8, feature: "Product context for AI Apps", priority: "Medium", mentions: 28, category: "Feature Requests", quote: "Upload a description of our product so AI has greater context when looking for features.", customer: "brendan@goideally.com" },
      { rank: 9, feature: "Store AskFred outputs", priority: "Medium", mentions: 3, category: "Feature Requests", quote: "AskFred output should be stored at the meeting level.", customer: "abhishek.c@fireflies.ai" },
      { rank: 10, feature: "Conditional AI follow-up triggers", priority: "Medium", mentions: 35, category: "Feature Requests", quote: "Ability to assign follow up action only if criteria is met.", customer: "jr.oakes@locomotive.agency" }
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
    theme: "Workflow & Integrations",
    requests: [
      { rank: 1, feature: "Copy transcript button", priority: "Critical", mentions: 13, category: "Design & Usability", quote: "Please add a 'copy' button that copies the transcript into TXT. I am tired of downloading word docs.", customer: "andre@flywayhealth.com" },
      { rank: 2, feature: "AND logic for participant search", priority: "Critical", mentions: 90, category: "Design & Usability", quote: "When searching by participants, it would be useful to search with AND instead of OR.", customer: "fox@atarim.io" },
      { rank: 3, feature: "Sync only MY tasks", priority: "Critical", mentions: 17, category: "Settings", quote: "I want to send only my action items to Asana. Not my customer's action items.", customer: "jacint.lazok@prerender.io" },
      { rank: 4, feature: "HubSpot meeting filtering", priority: "Critical", mentions: 4, category: "Settings", quote: "Fireflies is logging every single thing to HubSpot. I want it to log only specific meetings.", customer: "botty.dimanov@tenyks.ai" },
      { rank: 5, feature: "Video playback speed control", priority: "High", mentions: 4, category: "Feature Requests", quote: "There needs to be ability to watch video at 1.25x 1.5x speeds. Every other AI notetaker has this.", customer: "anthony@harounventures.com" },
      { rank: 6, feature: "On-demand AI Apps only", priority: "High", mentions: 16, category: "Settings", quote: "I don't want AI Apps applied to meetings by default. Apply on demand only.", customer: "chris@link.com.au" },
      { rank: 7, feature: "Slack message customization", priority: "Medium", mentions: 5, category: "Settings", quote: "The notes messages going to Slack are way too long.", customer: "andy.sietsema@flightschedulepro.com" },
      { rank: 8, feature: "Clearer onboarding consent flow", priority: "Medium", mentions: 1, category: "Design & Usability", quote: "The onboarding feels like a simple next/accept flow rather than encouraging a meaningful decision.", customer: "10ainote01@profine-group.com" },
      { rank: 9, feature: "AskFred within specific channels", priority: "Medium", mentions: 8, category: "Feature Requests", quote: "I would love to ask Fred within the context of a specific channel.", customer: "ldauriagupta@pypestream.com" },
      { rank: 10, feature: "Calendar-based meeting navigation", priority: "Medium", mentions: 8, category: "Design & Usability", quote: "Search function is lacking a calendar feature.", customer: "cassandra@livesolutionsnow.com" }
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
    theme: "Flexible Licensing",
    requests: [
      { rank: 1, feature: "Mixed license types per team", priority: "Critical", mentions: 8, category: "Pricing", quote: "I would like the ability to assign different types of licenses to my teammates.", customer: "10ainote01@profine-group.com" },
      { rank: 2, feature: "Disable users without removing", priority: "High", mentions: 9, category: "Controls & Permissions", quote: "It would be convenient to temporarily disable users while keeping them in the team.", customer: "10ainote01@profine-group.com" },
      { rank: 3, feature: "Notion database support", priority: "High", mentions: 3, category: "Feature Requests", quote: "I would like to add meeting notes to a Notion database, not just as a sub-page.", customer: "andrew@hvakr.com" },
      { rank: 4, feature: "Auto-extract meeting title", priority: "Medium", mentions: 47, category: "Meeting Notes/Summary", quote: "Meeting title should be extracted from the Meeting itself. Right now it comes as untitled.", customer: "ai_notes_test@sunrise.co" },
      { rank: 5, feature: "Dark mode", priority: "Medium", mentions: 15, category: "Design & Usability", quote: "I would love a dark mode to match with my system preferences.", customer: "svdtoorren@fbgroup.nl" },
      { rank: 6, feature: "Meeting deletion via API", priority: "Medium", mentions: 40, category: "Feature Requests", quote: "We miss the possibility to delete a meeting using the API.", customer: "bertrand@centre-national-agroecologie.fr" },
      { rank: 7, feature: "Offline audio download", priority: "Medium", mentions: 1, category: "Feature Requests", quote: "Would love to download audio for calls so I can listen while walking without data.", customer: "jessie@xenplatforms.com" },
      { rank: 8, feature: "Confidential folder for CEO", priority: "Medium", mentions: 28, category: "Security & Privacy", quote: "I'm the CEO and I can't have confidential recordings show up where all teammates can view.", customer: "alex@door3.com" },
      { rank: 9, feature: "Sync only MY tasks to Jira", priority: "Medium", mentions: 1, category: "Settings", quote: "There should be option to sync only my tasks.", customer: "vassilis@infiterra.com" },
      { rank: 10, feature: "Manual agenda & notes space", priority: "Low", mentions: 21, category: "Meeting Notes/Summary", quote: "I need a place to add agenda items and take manual notes during meeting.", customer: "ashley.rafalow@coactive.com" }
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
    theme: "Transcript Quality",
    requests: [
      { rank: 1, feature: "Auto-detect language mid-meeting", priority: "Critical", mentions: 33, category: "Reliability", quote: "The meeting spontaneously switched to German. Transcript is useless.", customer: "antonio@mbold.io" },
      { rank: 2, feature: "Side-by-side translation view", priority: "High", mentions: 1, category: "Feature Requests", quote: "I'd like to see the transcript in another language on a tab.", customer: "wilmer070@gmail.com" },
      { rank: 3, feature: "AskFred beyond 30 days", priority: "High", mentions: 8, category: "Feature Requests", quote: "Why can't I use AskFred for longer than 30 days?", customer: "acw@qampo.com" },
      { rank: 4, feature: "Speaker label persistence", priority: "High", mentions: 2, category: "Feature Requests", quote: "If I label a speaker, that should carry over to all meetings.", customer: "ascorper@gmail.com" },
      { rank: 5, feature: "Edit/trim meeting recordings", priority: "Medium", mentions: 32, category: "Feature Requests", quote: "It would be useful to modify meetings and cut out certain parts.", customer: "arsen.nikitindigital@gmail.com" },
      { rank: 6, feature: "Custom vocabulary for uploads", priority: "Medium", mentions: 3, category: "Settings", quote: "Custom vocabulary is not referenced for uploaded audio files.", customer: "alkilpel@outlook.com" },
      { rank: 7, feature: "Formatted download option", priority: "Medium", mentions: 15, category: "Meeting Notes/Summary", quote: "When I download the summary, they are unformatted.", customer: "avery.chan@interlinkmanagement.net" },
      { rank: 8, feature: "iOS Shortcuts integration", priority: "Low", mentions: 2, category: "Feature Requests", quote: "With Otter AI you can use iOS Shortcuts to start recording.", customer: "philwhite90@gmail.com" },
      { rank: 9, feature: "Tag/label meetings", priority: "Low", mentions: 27, category: "Design & Usability", quote: "I'd love to be able to tag calls for clients vs prospects.", customer: "ask@megangerhartcpa.com" },
      { rank: 10, feature: "Custom branding on exports", priority: "Low", mentions: 1, category: "Feature Requests", quote: "Add company logo to the meeting summary PDF.", customer: "chris@bluntsecurity.uk" }
    ]
  }
};

const priorityStyles = {
  Critical: { bg: '#FEE2E2', color: '#B91C1C', border: '#FECACA' },
  High: { bg: '#FEF3C7', color: '#B45309', border: '#FDE68A' },
  Medium: { bg: '#F1F5F9', color: '#475569', border: '#E2E8F0' },
  Low: { bg: '#F8FAFC', color: '#64748B', border: '#F1F5F9' }
};

const categoryStyles = {
  'Controls & Permissions': { bg: '#E0E7FF', color: '#4338CA' },
  'Security & Privacy': { bg: '#FCE7F3', color: '#BE185D' },
  'Feature Requests': { bg: '#DBEAFE', color: '#1D4ED8' },
  'Design & Usability': { bg: '#D1FAE5', color: '#047857' },
  'Meeting Notes/Summary': { bg: '#FEF3C7', color: '#B45309' },
  'Settings': { bg: '#F3E8FF', color: '#7C3AED' },
  'Reliability': { bg: '#FFEDD5', color: '#C2410C' },
  'Pricing': { bg: '#CCFBF1', color: '#0D9488' },
  'Support': { bg: '#FEE2E2', color: '#DC2626' }
};

const MentionsTooltip = ({ mentions, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-flex' }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 2000)}
    >
      {children}
      {showTooltip && (
        <div style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: '8px',
          padding: '8px 12px',
          background: '#1E293B',
          color: 'white',
          borderRadius: '8px',
          fontSize: '12px',
          fontWeight: '500',
          whiteSpace: 'nowrap',
          zIndex: 100,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          fontFamily: 'Inter, sans-serif'
        }}>
          <div style={{ fontWeight: '700', marginBottom: '2px' }}>{mentions} mentions</div>
          <div style={{ fontSize: '10px', color: '#94A3B8' }}>found in customer feedback</div>
          <div style={{
            position: 'absolute',
            bottom: '-6px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderTop: '6px solid #1E293B'
          }} />
        </div>
      )}
    </div>
  );
};

const FeatureCard = ({ request, accent, onCategoryClick, selectedCategory }) => {
  const [expanded, setExpanded] = useState(false);
  const priority = priorityStyles[request.priority];
  const category = categoryStyles[request.category] || { bg: '#F1F5F9', color: '#64748B' };
  const isFiltered = selectedCategory && selectedCategory !== request.category;

  if (isFiltered) return null;

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
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '8px',
            flexWrap: 'wrap'
          }}>
            <div style={{
              fontWeight: '500',
              fontSize: '14px',
              color: '#1E293B',
              lineHeight: '1.4',
              fontFamily: 'Inter, -apple-system, sans-serif'
            }}>
              {request.feature}
            </div>
            <MentionsTooltip mentions={request.mentions}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '2px 8px',
                borderRadius: '6px',
                background: '#0F172A',
                color: 'white',
                fontSize: '11px',
                fontWeight: '700',
                fontFamily: 'Inter, sans-serif',
                flexShrink: 0,
                cursor: 'help'
              }}>
                <Hash size={10} />
                {request.mentions}
              </div>
            </MentionsTooltip>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
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
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '2px 8px',
              borderRadius: '4px',
              fontSize: '10px',
              fontWeight: '500',
              background: category.bg,
              color: category.color,
              fontFamily: 'Inter, -apple-system, sans-serif',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              border: selectedCategory === request.category ? `2px solid ${category.color}` : '2px solid transparent'
            }}
            onClick={(e) => {
              e.stopPropagation();
              onCategoryClick(request.category);
            }}
            >
              <Tag size={10} />
              {request.category}
            </span>
          </div>
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

const SegmentSection = ({ segment, isOpen, onToggle, onCategoryClick, selectedCategory }) => {
  const Icon = segment.icon;
  const filteredRequests = selectedCategory
    ? segment.requests.filter(r => r.category === selectedCategory)
    : segment.requests;
  const totalMentions = filteredRequests.reduce((sum, r) => sum + r.mentions, 0);

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
                {segment.subtitle} • {segment.theme}
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
            justifyContent: 'space-between',
            marginBottom: '12px',
            paddingLeft: '2px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <BarChart3 size={12} color={segment.accent} />
              <span style={{
                fontSize: '10px',
                fontWeight: '600',
                color: segment.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.8px',
                fontFamily: 'Inter, sans-serif'
              }}>
                {selectedCategory ? `Filtered: ${selectedCategory}` : 'Top 10 Requests'}
              </span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              color: '#64748B',
              fontFamily: 'Inter, sans-serif'
            }}>
              <Hash size={11} />
              <span style={{ fontWeight: '600' }}>{totalMentions}</span>
              <span>{selectedCategory ? 'filtered mentions' : 'total mentions'}</span>
            </div>
          </div>

          {segment.requests.map((request) => (
            <FeatureCard
              key={request.rank}
              request={request}
              accent={segment.accent}
              onCategoryClick={onCategoryClick}
              selectedCategory={selectedCategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default function FeatureRequestsDashboard() {
  const [openSegments, setOpenSegments] = useState({ enterprise: true });
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleSegment = (key) => {
    setOpenSegments(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(prev => prev === category ? null : category);
    // Open all segments when filtering
    if (selectedCategory !== category) {
      setOpenSegments({ enterprise: true, smb_large: true, smb_small: true, individual: true });
    }
  };

  const totalRequests = Object.values(data).reduce((sum, seg) => sum + seg.count, 0);
  const totalMentions = Object.values(data).reduce((sum, seg) =>
    sum + seg.requests.reduce((s, r) => s + r.mentions, 0), 0
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F8FAFC',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    }}>
      <div style={{
        maxWidth: '860px',
        margin: '0 auto'
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

      {/* Category Legend */}
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
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ArrowUpRight size={14} color="#0F172A" />
              <span style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#0F172A',
                fontFamily: 'Inter, sans-serif'
              }}>
                Categories
              </span>
              <span style={{
                fontSize: '10px',
                color: '#94A3B8',
                fontFamily: 'Inter, sans-serif'
              }}>
                (tap to filter)
              </span>
            </div>
            {selectedCategory && (
              <button
                onClick={() => setSelectedCategory(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '10px',
                  fontWeight: '600',
                  background: '#FEE2E2',
                  color: '#DC2626',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                <X size={12} />
                Clear filter
              </button>
            )}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {Object.entries(categoryStyles).map(([cat, style]) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat)}
                style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: '500',
                  background: selectedCategory === cat ? style.color : style.bg,
                  color: selectedCategory === cat ? 'white' : style.color,
                  fontFamily: 'Inter, sans-serif',
                  border: selectedCategory === cat ? `2px solid ${style.color}` : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  transform: selectedCategory === cat ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: selectedCategory === cat ? `0 2px 8px ${style.color}40` : 'none'
                }}
              >
                {cat}
              </button>
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
            onCategoryClick={handleCategoryClick}
            selectedCategory={selectedCategory}
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
          Analysis of 3,552 customer feedback entries • {totalMentions} total mentions tracked
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
    </div>
  );
}
