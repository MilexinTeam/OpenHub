export default () => {
    return (
        <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">



  <circle cx="30" cy="30" r="18" fill="#111827"/>
  <circle cx="22" cy="24" r="4" fill="#38BDF8"/>
  <circle cx="38" cy="24" r="4" fill="#38BDF8"/>
  <circle cx="30" cy="38" r="4" fill="#38BDF8"/>

  <line x1="22" y1="24" x2="38" y2="24" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
  <line x1="22" y1="24" x2="30" y2="38" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
  <line x1="38" y1="24" x2="30" y2="38" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>


  <text x="60" y="36"
        font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-size="24"
        fill="#111827"
        letter-spacing="0.04em">
    Open<tspan fill="#38BDF8">Hub</tspan>
  </text>
</svg>

    )
}