class FlipBookViewer extends React.Component {
  state = {
    navHidden: false,
  };

  lastScrollY = window.scrollY;
  scrollTimeout = null;

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    clearTimeout(this.scrollTimeout);
  }

  handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > this.lastScrollY + 10) {
      // scrolling down → hide
      this.setState({ navHidden: true });
    } else {
      // scrolling up → show
      this.setState({ navHidden: false });
    }

    this.lastScrollY = currentScrollY;

    // auto-show after scroll stops
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.setState({ navHidden: false });
    }, 900);
  };
}