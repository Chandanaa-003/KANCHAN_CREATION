export function AnnouncementBar() {
  return (
    <div
      className="bg-brand-burgundy text-brand-ivory text-xs sm:text-sm py-2 px-4 text-center"
      role="banner"
      aria-label="Promotional announcement"
    >
      {/* Desktop: static text */}
      <div className="hidden sm:block">
        Free shipping on orders above ₹999 &nbsp;|&nbsp; Cash on Delivery available &nbsp;|&nbsp;
        Shop the latest ethnic wear
      </div>

      {/* Mobile: marquee */}
      <div className="sm:hidden overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          Free shipping on orders above ₹999 &nbsp;|&nbsp; Cash on Delivery available &nbsp;|&nbsp;
          Shop the latest ethnic wear &nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </div>
  )
}
