import { useEffect, useMemo, useState } from 'react'
const STORAGE_KEY = 'rienna_dashboard_v1'

const DASH_SECTIONS = {
  dashboard: 'dashboard',
  orders: 'orders',
  downloads: 'downloads',
  invoices: 'invoices',
  profile: 'profile',
}

const Dashboard = ({ userName = 'Rienna Member', userEmail = '' }) => {
  const avatarSrc = '/images/p1.webp'
  const user = {
    name: userName,
    email: userEmail || 'member@rienna.com',
    referralCode: 'RIENNA20',
  }

  const defaultOrders = [
    { id: '#RIN-1001', date: '2026-03-04', items: 2, amount: 42.0, status: 'Delivered' },
    { id: '#RIN-1002', date: '2026-03-17', items: 1, amount: 32.0, status: 'Delivered' },
    { id: '#RIN-1003', date: '2026-04-02', items: 3, amount: 74.0, status: 'Delivered' },
    { id: '#RIN-1004', date: '2026-04-12', items: 2, amount: 56.0, status: 'Shipped' },
  ]

  const defaultLevelReferrals = [
    { level: 'Level 1', users: 6 },
    { level: 'Level 2', users: 14 },
    { level: 'Level 3', users: 23 },
  ]

  const [copied, setCopied] = useState(false)
  const [orders, setOrders] = useState(defaultOrders)
  const [levelReferrals, setLevelReferrals] = useState(defaultLevelReferrals)
  const [earningsBalance, setEarningsBalance] = useState(0)
  const [totalEarned, setTotalEarned] = useState(0)
  const [spentFromEarnings, setSpentFromEarnings] = useState(0)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const saved = JSON.parse(raw)
      if (Array.isArray(saved.orders)) setOrders(saved.orders)
      if (Array.isArray(saved.levelReferrals)) setLevelReferrals(saved.levelReferrals)
      if (typeof saved.earningsBalance === 'number') setEarningsBalance(saved.earningsBalance)
      if (typeof saved.totalEarned === 'number') setTotalEarned(saved.totalEarned)
      if (typeof saved.spentFromEarnings === 'number') setSpentFromEarnings(saved.spentFromEarnings)
    } catch {
      // ignore corrupted storage
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ orders, levelReferrals, earningsBalance, totalEarned, spentFromEarnings })
      )
    } catch {
      // ignore
    }
  }, [orders, levelReferrals, earningsBalance, totalEarned, spentFromEarnings])

  const totalOrders = orders.length
  const totalReferrals = useMemo(
    () => levelReferrals.reduce((sum, item) => sum + item.users, 0),
    [levelReferrals]
  )
  const referralLink = `https://rienna.com/ref/${user.referralCode}`

  // Demo earning rule: $2 per referred user (all levels)
  const referralEarningRate = 2
  const computedReferralEarnings = useMemo(() => totalReferrals * referralEarningRate, [totalReferrals])

  useEffect(() => {
    // If computed earnings increases, auto-credit difference (demo behavior).
    setTotalEarned((prevTotal) => {
      const nextTotal = Math.max(prevTotal, computedReferralEarnings)
      const diff = nextTotal - prevTotal
      if (diff > 0) setEarningsBalance((prevBal) => prevBal + diff)
      return nextTotal
    })
  }, [computedReferralEarnings])

  const [activeSection, setActiveSection] = useState(DASH_SECTIONS.dashboard)

  const scrollToSection = (section) => {
    const el = document.getElementById(`dash-${section}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const syncFromHash = () => {
      const raw = String(window.location.hash || '').replace('#', '').trim()
      const next =
        raw === DASH_SECTIONS.orders ||
        raw === DASH_SECTIONS.downloads ||
        raw === DASH_SECTIONS.invoices ||
        raw === DASH_SECTIONS.profile ||
        raw === DASH_SECTIONS.dashboard
          ? raw
          : DASH_SECTIONS.dashboard
      setActiveSection(next)
      window.setTimeout(() => scrollToSection(next), 0)
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(referralLink)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main data-bg-color="#F9F9F9" style={{ backgroundColor: 'rgb(249, 249, 249)' }}>
      <div className="aq-dashboard-ptb pt-80 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="aq-dashboard-sidebar-wrap">
                <aside className="aq-dashboard-sidebar">
                  <div className="aq-dashboard-profile-info">
                    <div className="aq-dashboard-profile-thumb mb-15">
                      <img src={avatarSrc} alt="Profile" className="avatar" />
                    </div>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                  </div>

                  <nav className="aq-dashboard-sidebar-menu">
                    <a
                      href={`#${DASH_SECTIONS.dashboard}`}
                      className={activeSection === DASH_SECTIONS.dashboard ? 'active' : ''}
                      onClick={() => setActiveSection(DASH_SECTIONS.dashboard)}
                    >
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M0.863852 2.3703C1.03919 1.62288 1.6229 1.03926 2.37033 0.863953C3.01812 0.712015 3.69243 0.712014 4.34022 0.863953C5.08765 1.03926 5.67136 1.62288 5.8467 2.37031C5.99866 3.0181 5.99866 3.69226 5.8467 4.34005C5.67136 5.08748 5.08765 5.6711 4.34022 5.84641C3.69243 5.99834 3.01812 5.99834 2.37033 5.84641C1.6229 5.6711 1.03919 5.08748 0.863852 4.34006C0.711888 3.69227 0.711888 3.01809 0.863852 2.3703Z"
                            fill="currentColor"
                            fillOpacity="0.15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M0.863852 10.9258C1.03919 10.1784 1.6229 9.59477 2.37033 9.41946C3.01812 9.26753 3.69243 9.26753 4.34022 9.41946C5.08765 9.59477 5.67136 10.1784 5.8467 10.9258C5.99866 11.5736 5.99866 12.2478 5.8467 12.8956C5.67136 13.643 5.08765 14.2266 4.34022 14.4019C3.69243 14.5539 3.01812 14.5539 2.37033 14.4019C1.6229 14.2266 1.03919 13.643 0.863852 12.8956C0.711888 12.2478 0.711888 11.5736 0.863852 10.9258Z"
                            fill="currentColor"
                            fillOpacity="0.15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M9.41854 2.3703C9.59388 1.62288 10.1776 1.03926 10.925 0.863953C11.5728 0.712015 12.2471 0.712014 12.8949 0.863953C13.6423 1.03926 14.226 1.62288 14.4014 2.37031C14.5533 3.0181 14.5533 3.69226 14.4014 4.34005C14.226 5.08748 13.6423 5.6711 12.8949 5.84641C12.2471 5.99834 11.5728 5.99834 10.925 5.84641C10.1776 5.6711 9.59388 5.08748 9.41854 4.34006C9.26658 3.69227 9.26658 3.01809 9.41854 2.3703Z"
                            fill="currentColor"
                            fillOpacity="0.15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                          <path
                            d="M9.41854 10.926C9.59388 10.1785 10.1776 9.59493 10.925 9.41962C11.5728 9.26768 12.2471 9.26768 12.8949 9.41962C13.6423 9.59493 14.226 10.1785 14.4014 10.926C14.5533 11.5738 14.5533 12.2479 14.4014 12.8957C14.226 13.6431 13.6423 14.2268 12.8949 14.4021C12.2471 14.554 11.5728 14.554 10.925 14.4021C10.1776 14.2268 9.59388 13.6431 9.41854 12.8957C9.26658 12.2479 9.26658 11.5738 9.41854 10.926Z"
                            fill="currentColor"
                            fillOpacity="0.15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      Dashboard
                    </a>
                    <a
                      href={`#${DASH_SECTIONS.orders}`}
                      className={activeSection === DASH_SECTIONS.orders ? 'active' : ''}
                      onClick={() => setActiveSection(DASH_SECTIONS.orders)}
                    >
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                          <path
                            d="M15.8484 4.25001V3.50001H15.2474L15.1164 4.08653L15.8484 4.25001ZM1.65162 4.25001V3.50001H0.715644L0.919653 4.41348L1.65162 4.25001ZM0.75 3.50001C0.335786 3.50001 0 3.83579 0 4.25001C0 4.66422 0.335786 5.00001 0.75 5.00001V3.50001ZM16.75 5.00001C17.1642 5.00001 17.5 4.66422 17.5 4.25001C17.5 3.83579 17.1642 3.50001 16.75 3.50001V5.00001ZM15.0473 7.35255L14.3234 7.15622L13.5374 10.0543L14.9851 10.447L15.7711 7.54887L15.0473 7.35255ZM3.23875 10.2506L3.9626 10.0543L3.17657 7.15621L1.72888 7.54886L2.51491 10.4469L3.23875 10.2506ZM8.75 14.75V14C7.45224 14 6.96913 13.9916 6.56343 13.8639L6.11291 15.2946C6.7918 15.5084 7.55504 15.5 8.75 15.5V14.75ZM4.07435 12.7311L3.4268 13.1095C4.03868 14.1566 4.98893 14.9407 6.11291 15.2946L6.56343 13.8639C5.8174 13.629 5.15798 13.099 4.7219 12.3527L4.07435 12.7311ZM13.4256 12.7311L14.0732 13.1095C14.4397 12.4823 14.6426 11.7097 14.9851 10.447L13.5374 10.0543C13.171 11.4054 13.0194 11.9397 12.7781 12.3527L13.4256 12.7311ZM11.1618 14.5792L10.9366 13.8639C10.5309 13.9916 10.0478 14 8.75 14V15.5C9.94496 15.5 10.7082 15.5084 11.3871 15.2946L11.1618 14.5792ZM15.8484 4.25001V5.00001H16.75V3.50001H15.8484ZM0.75 5.00001H3.34412V3.50001H0.75V5.00001ZM3.34412 5.00001H14.35V3.50001H3.34412V5.00001ZM14.35 5.00001H15.95V3.50001H14.35V5.00001ZM15.95 5.00001H16.75V3.50001H15.95V5.00001ZM2.38359 4.08653C2.56737 4.90945 2.83618 5.90118 3.17657 7.15622L4.62395 6.76357C4.31211 5.61219 4.06329 4.7006 3.91965 4.41348L2.38359 4.08653ZM14.3234 7.15622C14.6638 5.90118 14.9326 4.90945 15.1164 4.08653L13.5803 4.41348C13.4367 4.7006 13.1879 5.61219 12.876 6.76357L14.3234 7.15622ZM6.4 7.75V11.25H7.9V7.75H6.4ZM9.6 7.75V11.25H11.1V7.75H9.6ZM11.15 0.75L10.5965 1.25608L13.7965 4.75608L14.9036 3.74393L11.7035 0.243923L11.15 0.75ZM7.09763 1.25609L6.54411 0.750013L5.99059 0.243936L2.79059 3.74393L3.89764 4.75608L7.09763 1.25609Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      Orders
                    </a>
                    <a
                      href={`#${DASH_SECTIONS.downloads}`}
                      className={activeSection === DASH_SECTIONS.downloads ? 'active' : ''}
                      onClick={() => setActiveSection(DASH_SECTIONS.downloads)}
                    >
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                          <path
                            d="M14.75 7.03223C14.75 10.8997 12.125 14.0322 7.75 14.0322C3.375 14.0322 0.75 10.8997 0.75 7.03223"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M5.125 6L7.75 8.625L10.375 6" fill="#E1E1E5" />
                          <path
                            d="M5.125 6L7.75 8.625L10.375 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.75 0.75L7.64575 7.89875"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Downloads
                    </a>
                    <a
                      href={`#${DASH_SECTIONS.invoices}`}
                      className={activeSection === DASH_SECTIONS.invoices ? 'active' : ''}
                      onClick={() => setActiveSection(DASH_SECTIONS.invoices)}
                    >
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                          <path
                            d="M3.33368 14.9082C3.98959 14.2043 4.98947 14.2603 5.5654 15.0282L6.3733 16.1081C7.02122 16.964 8.06908 16.964 8.717 16.1081L9.5249 15.0282C10.1008 14.2603 11.1007 14.2043 11.7566 14.9082C13.1804 16.428 14.3403 15.9241 14.3403 13.7964V4.7815C14.3483 1.5579 13.5964 0.75 10.5728 0.75H4.52553C1.50191 0.75 0.75 1.5579 0.75 4.7815V13.7884C0.75 15.9241 1.91785 16.42 3.33368 14.9082Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M4.42681 7.94975H4.43399"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M6.66406 7.94824H11.0635"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M4.42681 4.75054H4.43399"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M6.66406 4.74902H11.0635"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Invoices
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                          <path
                            d="M0.75 0.75H2.229C3.147 0.75 3.8695 1.54051 3.793 2.45002L3.0875 10.9161C2.9685 12.3016 4.06499 13.4916 5.45899 13.4916H14.5115C15.7355 13.4916 16.8065 12.4886 16.9 11.2731L17.359 4.89805C17.461 3.48704 16.39 2.33951 14.9705 2.33951H3.99701"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Order Return Request
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M8.95935 1.76092L10.1912 4.24501C10.3592 4.59081 10.8071 4.92249 11.1851 4.986L13.4179 5.36003C14.8457 5.59997 15.1817 6.64442 14.1528 7.67475L12.417 9.4249C12.123 9.7213 11.962 10.2929 12.053 10.7022L12.5499 12.8687C12.9419 14.5836 12.039 15.247 10.5342 14.3507L8.4414 13.1016C8.06344 12.8758 7.44051 12.8758 7.05556 13.1016L4.96279 14.3507C3.46495 15.247 2.55505 14.5766 2.94701 12.8687L3.44395 10.7022C3.53494 10.2929 3.37396 9.7213 3.08 9.4249L1.34419 7.67475C0.3223 6.64442 0.651264 5.59997 2.07911 5.36003L4.31186 4.986C4.68282 4.92249 5.13077 4.59081 5.29875 4.24501L6.53061 1.76092C7.20254 0.413025 8.29442 0.413025 8.95935 1.76092Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Reviews
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path
                            d="M14.6091 10.9333L10.9302 14.6159C9.41958 16.128 6.96692 16.128 5.44822 14.6159L1.88293 11.0471C0.372356 9.53501 0.372356 7.07991 1.88293 5.5597L5.57004 1.88517C6.34157 1.11287 7.40548 0.69827 8.49374 0.755176L12.5544 0.950284C14.1787 1.02345 15.47 2.31604 15.5512 3.9338L15.7461 7.99854C15.7949 9.09602 15.3807 10.161 14.6091 10.9333Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Special Offers
                    </a>
                    <a
                      href={`#${DASH_SECTIONS.profile}`}
                      className={activeSection === DASH_SECTIONS.profile ? 'active' : ''}
                      onClick={() => setActiveSection(DASH_SECTIONS.profile)}
                    >
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                          <path
                            d="M6.76172 7.74993C8.69472 7.74993 10.2617 6.18294 10.2617 4.24996C10.2617 2.31699 8.69472 0.75 6.76172 0.75C4.82872 0.75 3.26172 2.31699 3.26172 4.24996C3.26172 6.18294 4.82872 7.74993 6.76172 7.74993Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            opacity="0.4"
                            d="M12.776 14.7496C12.776 12.0406 10.081 9.84961 6.763 9.84961C3.445 9.84961 0.75 12.0406 0.75 14.7496"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Profile
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                          <path
                            d="M3.75391 6.7502V5.25015C3.75391 2.76757 4.50391 0.75 8.25391 0.75C12.0039 0.75 12.7539 2.76757 12.7539 5.25015V6.7502"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 15.7503H4.5C1.5 15.7503 0.75 15.0003 0.75 12.0002V10.5001C0.75 7.50003 1.5 6.75 4.5 6.75H12C15 6.75 15.75 7.50003 15.75 10.5001V12.0002C15.75 15.0003 15 15.7503 12 15.7503Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Security
                    </a>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                          <path
                            d="M3.77711 1.50571C5.64984 0.481583 7.95174 0.499483 9.8069 1.5526C11.6438 2.62717 12.7603 4.54497 12.7499 6.60797C12.7071 8.65744 11.51 10.5839 10.0135 12.0732C9.14986 12.9367 8.18367 13.7002 7.13472 14.3481C7.02669 14.4069 6.90836 14.4463 6.78556 14.4643C6.66737 14.4595 6.55227 14.4267 6.45065 14.3686C4.84922 13.395 3.44429 12.1522 2.30343 10.7001C1.34879 9.48791 0.80643 8.02342 0.75 6.5055L0.754274 6.28468C0.832219 4.30333 1.97125 2.49327 3.77711 1.50571Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      Address
                    </a>
                    <a href="#" data-auth-trigger="logout" onClick={(e) => e.preventDefault()}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M7.82813 0.749987C11.6526 0.749987 14.7503 3.34578 14.7503 7.67211C14.7503 11.9984 11.6526 14.5942 7.82812 14.5942"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.39453 9.99078L9.60961 7.7757L7.39453 5.56062"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.75 7.77496L9.54975 7.77496"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Logout
                    </a>
                  </nav>
                </aside>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="aq-dashboard-wrapper pt-30">
                <h3 className="aq-dashboard-title" id={`dash-${DASH_SECTIONS.dashboard}`}>
                  Dashboard
                </h3>

                <div className="aq-dashboard-content-layout">
                  <div className="aq-dashboard-box aq-dashboard-welcome-card">
                    <img src={avatarSrc} alt="Profile" className="avatar avatar-lg" />
                    <div className="welcome-text">
                      <h2>Welcome back {user.name}</h2>
                      <p>Manage your account, view orders, and update your preferences from your personal dashboard.</p>
                    </div>
                  </div>

                  <div className="aq-dashboard-grid">
                    <div className="aq-dashboard-grid-card aq-dashboard-box">
                      <span className="aq-dashboard-grid-card-badge">{totalOrders}</span>
                      <span className="aq-dashboard-grid-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="28" viewBox="0 0 33 28" fill="none">
                          <path
                            d="M26.928 18.394L28.451 13.0119C29.1074 10.692 29.6383 8.81581 30.0031 7.25001H27.1001H5.7761H2.49689C2.86171 8.8158 3.3926 10.692 4.04903 13.0119L5.57196 18.394C6.25873 20.8211 6.60213 22.0347 7.19093 23.0006C8.20614 24.6658 9.76551 25.8861 11.5771 26.4329C12.6278 26.75 13.8352 26.75 16.25 26.75C18.6648 26.75 19.8722 26.75 20.9229 26.4329C22.7345 25.8861 24.2939 24.6658 25.3091 23.0006C25.8979 22.0347 26.2413 20.8211 26.928 18.394Z"
                            fill="#F9F9F9"
                          />
                          <path
                            d="M28.451 13.0119L27.7293 12.8077L26.2064 18.1898L27.6497 18.5982L29.1726 13.2161L28.451 13.0119ZM5.57196 18.394L6.29363 18.1898L4.77069 12.8077L3.32736 13.2161L4.85029 18.5982L5.57196 18.394Z"
                            fill="#37383A"
                          />
                        </svg>
                      </span>
                      <h3 className="aq-dashboard-grid-card-title">View Orders</h3>
                      <p>
                        Track your recent orders and <br /> order history
                      </p>
                      <button
                        type="button"
                        className="aq-dashboard-grid-card-btn"
                        onClick={() => {
                          setActiveSection(DASH_SECTIONS.orders)
                          window.location.hash = DASH_SECTIONS.orders
                        }}
                      >
                        View Orders
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M0.648438 8.65002L8.64844 0.650024"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0.648438 0.650024H8.64844V8.65002"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div className="aq-dashboard-grid-card aq-dashboard-box">
                      <span className="aq-dashboard-grid-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="none">
                          <path
                            d="M7.37179 2.40313C11.4684 0.162837 16.5038 0.201994 20.562 2.5057C24.5802 4.85632 27.0224 9.05149 26.9998 13.5643C26.9062 18.0475 24.2874 22.2618 21.014 25.5196C19.1247 27.4084 17.0112 29.0785 14.7166 30.496C14.4803 30.6246 14.2214 30.7107 13.9528 30.75C13.6942 30.7396 13.4425 30.6677 13.2202 30.5408C9.71705 28.411 6.64375 25.6924 4.14812 22.5158C2.05985 19.8642 0.87344 16.6606 0.75 13.3402L0.759349 12.8571C0.929854 8.5229 3.42149 4.5634 7.37179 2.40313ZM15.5761 9.6349C13.9108 8.96865 11.9907 9.33062 10.7125 10.5518C9.43423 11.773 9.04995 13.6125 9.73906 15.2114C10.4282 16.8103 12.0547 17.8533 13.8593 17.8533C15.0414 17.8613 16.1779 17.4156 17.0153 16.6155C17.8527 15.8155 18.3215 14.7276 18.3174 13.5942C18.3236 11.8642 17.2415 10.3011 15.5761 9.6349Z"
                            stroke="#37383A"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <h3 className="aq-dashboard-grid-card-title">Manage Address</h3>
                      <p>
                        Update your shipping and <br /> billing addresses
                      </p>
                      <button type="button" className="aq-dashboard-grid-card-btn">
                        Manage Address
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M0.648438 8.65002L8.64844 0.650024"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0.648438 0.650024H8.64844V8.65002"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <div className="aq-dashboard-grid-card aq-dashboard-box">
                      <span className="aq-dashboard-grid-card-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28" fill="none">
                          <path
                            d="M23.084 26.7496C23.084 21.7185 18.079 17.6494 11.917 17.6494C5.755 17.6494 0.75 21.7185 0.75 26.7496M18.4141 7.25014C18.4141 10.8401 15.5039 13.7503 11.9141 13.7503C8.32421 13.7503 5.41406 10.8401 5.41406 7.25014C5.41406 3.66021 8.32421 0.75 11.9141 0.75C15.5039 0.75 18.4141 3.66021 18.4141 7.25014Z"
                            stroke="#37383A"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <h3 className="aq-dashboard-grid-card-title">Profile Settings</h3>
                      <p>Edit your profile and account <br /> details</p>
                      <button
                        type="button"
                        className="aq-dashboard-grid-card-btn"
                        onClick={() => document.querySelector('.referral-level-list')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Edit Profile
                        <span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path
                              d="M0.648438 8.65002L8.64844 0.650024"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M0.648438 0.650024H8.64844V8.65002"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="aq-dashboard-box aq-dashboard-cta-bar">
                    <div className="cta-left">
                      <div className="icon-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                          <rect width="60" height="60" rx="30" fill="#F9F9F9" />
                          <path
                            d="M38.3835 33.483L39.5257 29.4464C40.018 27.7065 40.4162 26.2994 40.6898 25.125H38.5126H22.5196H20.0602C20.3338 26.2993 20.732 27.7065 21.2243 29.4464L22.3665 33.483C22.8815 35.3033 23.1391 36.2135 23.5807 36.9379C24.3421 38.1869 25.5116 39.1021 26.8703 39.5122C27.6583 39.75 28.5639 39.75 30.375 39.75C32.1861 39.75 33.0917 39.75 33.8797 39.5122C35.2384 39.1021 36.4079 38.1869 37.1693 36.9379C37.6109 36.2135 37.8684 35.3034 38.3835 33.483Z"
                            fill="#F9F9F9"
                          />
                        </svg>
                      </div>
                      <div className="cta-text">
                        <h3>Ready to start shopping?</h3>
                        <p>No orders yet. Explore our products and find something you love.</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="aq-dashboard-cta-bar-btn"
                      onClick={() => (window.location.href = '/?page=product-details&product=day-cream')}
                    >
                      Browse Products
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path
                            d="M0.648438 8.65002L8.64844 0.650024"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M0.648438 0.650024H8.64844V8.65002"
                            stroke="currentColor"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>

                  <div className="aq-dashboard-box" style={{ padding: 25, marginBottom: 20 }} id={`dash-${DASH_SECTIONS.profile}`}>
                    <h5 className="mb-15">Profile</h5>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div style={{ marginBottom: 0 }}>
                          <h5 className="mb-10">Name</h5>
                          <div className="aq-form-control" style={{ background: '#fff' }}>
                            {user.name}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div style={{ marginBottom: 0 }}>
                          <h5 className="mb-10">Email</h5>
                          <div className="aq-form-control" style={{ background: '#fff' }}>
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="aq-dashboard-box" style={{ padding: 25, marginBottom: 20 }}>
                    <h5 className="mb-15">Earnings Wallet</h5>
                    <div className="dashboard-wallet-row">
                      <div>
                        <p className="mb-0" style={{ color: '#6f6a67', fontSize: 14 }}>
                          Balance
                        </p>
                        <h4 className="mb-0">${earningsBalance.toFixed(2)}</h4>
                      </div>
                      <div className="text-end">
                        <p className="mb-0" style={{ color: '#6f6a67', fontSize: 14 }}>
                          Total earned
                        </p>
                        <strong>${totalEarned.toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className="dashboard-wallet-row mt-10">
                      <span style={{ color: '#6f6a67', fontSize: 14 }}>Spent from earnings</span>
                      <strong>${spentFromEarnings.toFixed(2)}</strong>
                    </div>
                  </div>

                  <div className="aq-dashboard-box" style={{ padding: 25, marginBottom: 20 }}>
                    <h5 className="mb-15">Referral Link</h5>
                    <div className="referral-row">
                      <input type="text" readOnly value={referralLink} className="aq-form-control referral-input" />
                      <button type="button" className="aq-btn-black radius-30" onClick={handleCopyLink}>
                        {copied ? 'Copied' : 'Copy Link'}
                      </button>
                    </div>
                  </div>

                  <div className="aq-dashboard-box" style={{ padding: 25, marginBottom: 20 }} id={`dash-${DASH_SECTIONS.downloads}`}>
                    <h5 className="mb-15">Downloads</h5>
                    <p className="mb-0" style={{ color: '#6f6a67' }}>
                      No downloads available right now.
                    </p>
                  </div>

                  <div className="aq-dashboard-box" style={{ padding: 25, marginBottom: 20 }} id={`dash-${DASH_SECTIONS.invoices}`}>
                    <h5 className="mb-15">Invoices</h5>
                    <p className="mb-0" style={{ color: '#6f6a67' }}>
                      No invoices generated yet.
                    </p>
                  </div>

                  <div className="row g-3">
                    <div className="col-lg-7">
                      <div className="aq-dashboard-box" style={{ padding: 25 }} id={`dash-${DASH_SECTIONS.orders}`}>
                        <h5 className="mb-15">Shopping Records</h5>
                        <div className="dashboard-table-wrap">
                          <table className="dashboard-table">
                            <thead>
                              <tr>
                                <th>Order ID</th>
                                <th>Date</th>
                                <th>Items</th>
                                <th>Amount</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders.map((order) => (
                                <tr key={order.id}>
                                  <td>{order.id}</td>
                                  <td>{order.date}</td>
                                  <td>{order.items}</td>
                                  <td>${order.amount.toFixed(2)}</td>
                                  <td>{order.status}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-5">
                      <div className="aq-dashboard-box" style={{ padding: 25 }}>
                        <h5 className="mb-15">Referral Level Stats</h5>
                        <ul className="referral-level-list">
                          {levelReferrals.map((item) => (
                            <li key={item.level}>
                              <span>{item.level}</span>
                              <strong>{item.users} users</strong>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
