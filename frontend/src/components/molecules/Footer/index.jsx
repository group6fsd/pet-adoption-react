export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-amber-500 to-purple-800 pt-24 pb-12">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <svg width="67" height="57" className="mx-auto" viewBox="0 0 67 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M33.404 24.4675C23.1237 24.3841 8.42253 39.7372 8.34329 49.5033C8.3076 53.9017 11.757 56.5576 17.5736 56.6048C23.8963 56.6561 28.097 53.5291 33.1678 53.5703C38.2827 53.6118 42.4437 56.8066 48.7108 56.8574C54.5273 56.9046 58.0194 54.3051 58.0551 49.9066C58.1343 40.1406 43.6842 24.5509 33.404 24.4675ZM14.3503 22.7236C13.0394 18.3457 8.91451 15.4839 5.13758 16.3305C1.36065 17.1771 -0.637713 21.4121 0.673214 25.79C1.98414 30.1679 6.10902 33.0296 9.88595 32.183C13.6629 31.3365 15.6612 27.1014 14.3503 22.7236ZM25.3392 20.1937C29.353 19.2003 31.3997 13.9485 29.9113 8.46385C28.423 2.97921 23.9626 -0.660409 19.9489 0.332972C15.9351 1.32635 13.8884 6.57813 15.3767 12.0628C16.8651 17.5474 21.3268 21.1883 25.3392 20.1937ZM61.7973 16.7915C58.0347 15.8838 53.8652 18.6782 52.4821 23.0342C51.1003 27.3902 53.0297 31.6571 56.7924 32.5649C60.5551 33.4727 64.7245 30.6782 66.1076 26.3222C67.4894 21.9662 65.56 17.6993 61.7973 16.7915ZM41.537 20.3251C45.5341 21.3835 50.0529 17.8167 51.6301 12.3569C53.2073 6.89717 51.246 1.61413 47.2489 0.554489C43.2518 -0.505153 38.733 3.06287 37.1558 8.52264C35.5786 13.9824 37.5399 19.2667 41.537 20.3251Z"
                fill="white"
              />
            </svg>
            <h3 className="font-semibold text-2xl text-white mt-2 mb-2 text-center">Pet Adoption</h3>
          </div>

          <div className="w-full mb-12 px-4 md:w-1/3">
            <div className="flex flex-wrap gap-2 text-white">
              <i className="fa fa-map-marker"></i>
              <p>Jl. Jend Sudirman No. 1, Jakarta</p>
            </div>
            <div className="flex flex-wrap gap-2 text-white">
              <i className="fa fa-phone"></i>
              <p>021 - 1234 - 5678</p>
            </div>
            <div className="flex flex-wrap gap-5 mt-12 text-white">
              <p>Social Media</p>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <div className="flex items-center justify-center mb-5">
            <a href="https://github.com/group6fsd" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover-bg-primary hover-text-white text-slate-300">
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="#" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover-bg-primary hover-text-white text-slate-300">
              <svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <p className="font-medium text-xs text-white text-center">
            Created with <span className="text-pink-500">❤</span>
            <a href="https://github.com/group6fsd" className="font-bold text-primary">
              Team 6 Fulllstack Developer Harisenin
            </a>
          </p>
          <p className="font-medium text-xs text-white text-center">Copyright &copy; 2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
