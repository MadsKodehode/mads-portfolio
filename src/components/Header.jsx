import VersionDefaultIcon from "../imgs/VersionDefaultIcon.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header-light">
      <div className="links">
        <Link className="link" to="/projekter">
          Projekter
        </Link>
        <div className="logo-wrap">
          <div className="svg-wrap">
            <svg
              className="logo-svg"
              width="62.6"
              height="66.6"
              viewBox="0 0 626 666"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M388.231 399.662L209.358 399.202L209.256 359.456L388.129 359.917C394.734 359.934 401.703 359.031 409.036 357.21C416.371 355.757 423.334 352.647 429.927 347.88C436.886 343.113 442.371 335.767 446.381 325.841C450.759 315.916 452.926 302.673 452.884 286.112C452.855 274.704 451.907 262.925 450.041 250.776C448.175 238.626 445.392 226.291 441.691 213.769L208.88 213.169L208.778 173.423L461.402 174.074C465.828 182.918 469.704 191.944 473.03 201.153C476.723 210.731 479.683 220.307 481.909 229.881C484.136 239.823 485.813 249.764 486.939 259.703C488.067 270.01 488.643 280.316 488.67 290.621C488.739 317.486 484.758 338.821 476.726 354.625C469.061 370.429 457.716 381.809 442.69 388.762C427.666 396.084 409.513 399.717 388.231 399.662ZM450.84 347.382C460.044 359.55 467.414 371.897 472.95 384.424C478.486 396.951 482.555 409.842 485.157 423.097C487.761 436.72 489.08 450.34 489.115 463.957C489.184 490.822 485.203 512.156 477.171 527.96C469.506 543.765 458.161 555.144 443.136 562.098C428.111 569.42 409.958 573.053 388.676 572.998L209.803 572.537L209.701 532.792L388.574 533.252C395.179 533.269 402.148 532.367 409.482 530.546C416.816 529.093 423.78 525.983 430.372 521.216C437.331 516.449 442.816 509.103 446.827 499.177C451.204 489.252 453.372 476.009 453.329 459.448C453.3 448.04 451.618 436.259 448.285 424.106C444.951 411.953 439.233 399.61 431.128 387.076L450.84 347.382Z"
                fill="#536977"
              />
              <path
                d="M237.769 266.338L416.642 266.798L416.744 306.544L237.871 306.083C231.266 306.066 224.297 306.968 216.963 308.79C209.629 310.243 202.665 313.353 196.073 318.12C189.114 322.886 183.629 330.233 179.619 340.159C175.241 350.084 173.074 363.327 173.116 379.887C173.145 391.296 174.093 403.075 175.959 415.224C177.824 427.373 180.608 439.709 184.309 452.231L417.12 452.831L417.222 492.577L164.598 491.926C160.172 483.082 156.296 474.056 152.97 464.847C149.277 455.269 146.317 445.693 144.091 436.119C141.864 426.177 140.187 416.236 139.061 406.297C137.933 395.989 137.357 385.684 137.33 375.379C137.261 348.514 141.242 327.179 149.274 311.375C156.939 295.571 168.284 284.191 183.31 277.238C198.334 269.916 216.487 266.283 237.769 266.338ZM175.16 318.618C165.956 306.45 158.586 294.103 153.05 281.576C147.514 269.049 143.445 256.158 140.843 242.903C138.239 229.28 136.92 215.66 136.885 202.043C136.816 175.178 140.797 153.843 148.829 138.04C156.494 122.235 167.839 110.855 182.864 103.902C197.889 96.5803 216.042 92.9469 237.324 93.0017L416.197 93.4625L416.299 133.208L237.426 132.748C230.821 132.731 223.852 133.633 216.518 135.454C209.184 136.907 202.22 140.017 195.628 144.784C188.669 149.551 183.184 156.897 179.173 166.823C174.796 176.748 172.628 189.991 172.671 206.552C172.7 217.96 174.382 229.741 177.715 241.894C181.049 254.047 186.767 266.39 194.872 278.924L175.16 318.618Z"
                fill="#536977"
              />
            </svg>
          </div>
          <img className="logo-faded" src={VersionDefaultIcon} alt="logo"></img>
        </div>
        <Link className="link" to="/om">
          Om meg
        </Link>
      </div>
    </header>
  );
};

export default Header;