import { useState } from 'react';
import bannerLargeImg from '../assets/images/banner-large-img.png';
import questionMarkIcon from '../assets/images/question-mark-icon.png';
import uploadFileIcon from '../assets/images/upload-file-icon.png';
import { PublicKey } from '@solana/web3.js';

import Header from "../components/HeaderComponent";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
// import Form from 'react-bootstrap/Form';
// import Footer from "../components/FooterComponent";



function HomePage() {
  const {connection} = useConnection();
  const {wallet} = useWallet()
  

  const [mintAddress, setMintAddress] = useState<PublicKey | undefined>(undefined)
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [tokenLogo, setTokenLogo] = useState<File | null>()
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [tokenDecimal, setTokenDecimal] = useState(9)
  const [tokenToPut, setTokenToPut] = useState(0)
  const [createdMarketId, setMarketId] = useState<string>("J6Yjwr1w1Q8fNHLFbTefH5Eq8cKDYQphTBDzzzeovGzj")
  const [createdLpMint, setLpMint] = useState<string>("")
  const [solToAddLiquidity, setSolToAddLiquidity] = useState('0')
  const [solAngelBalance, setSolAngelBalance] = useState<number>(0)
  const [tokenAngelBalance, setTokenAngelBalnace] = useState<number>(0)
  const [solMainBalance, setSolMainBalance] = useState<number>(0)
  const [tokenMainBalance, setTokenMainBalnace] = useState<number>(0)
  const [solBalances, setSolBalances] = useState<number[]>([])
  const [tokenBalances, setTokenBalances] = useState<number[]>([])
  const [poolId, setPoolId] = useState<PublicKey>()
  const [slippage, setSlippage] = useState<number>(10)
  const [percent, setPercent] = useState<string>("60");


  return (
    <div className='homePage'>
      <Header />
      <div className="banner">
        <div className="container">
          <div className="banner-content">
            <h1><span>Create a Solana Token</span> <br /> in minutes</h1>
            <p className="large">The perfect tool to create Solana SPL tokens. <br />  Simple, user friendly, and fast.</p>
          </div>
        </div>
        <div className="banner-img">
          <img src={bannerLargeImg} alt="bannerLargeImg" className="bannerLargeImg" />
        </div>
      </div>
      <div className="how-to-use">
        <div className="container">
          <h2><span>How to use</span> Solana Token Creator</h2>
          <div className="main-content-wrapper">
            <div className="row">
              <div className="col-md-12 col-lg-6 col-xl-7">
                <div className="content-wrapper">
                  <h3>Token Generation</h3>
                  <ul className="list">
                    <li>1. Connect your Solana wallet.</li>
                    <li>2. Specify the desired name for your Token</li>
                    <li>3. Indicate the symbol (max 8 characters).</li>
                    <li>4. Select the decimals quantity (0 for Whitelist  Token, 5 for utility Token, 9 for meme token).</li>
                    <li>5. Provide a brief description for your SPL Token.</li>
                    <li>6. Upload the image for your token (PNG).</li>
                    <li>7. Determine the Supply of your Token</li>
                    <li>8. Click on create, accept the transaction and wait until your tokens ready.</li>
                  </ul>
                  <p>The cost of Token creation is 0.5 SOL, covering all fees for SPL Token Creation.</p>
                  <p>Once the creation process starts, it will only take a few seco</p>
                  <p>Once complete, you will receive the total supply of the token in your wallet.</p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-5">
                <div className="form-wrapper">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" className="form-group" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="symbol">Symbol</label>
                          <input type="text" id="symbol" className="form-group" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="decimal">Decimals</label>
                          <input type="text" id="decimal" className="form-group" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="supply">Supply</label>
                          <input type="text" id="supply" className="form-group" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="image">Image  
                          
                          <div className="upload"><input type="file" name="image" id="image"/><img src={uploadFileIcon} alt="uploadFileIcon"  /></div>
                           </label>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label htmlFor="description">Description</label>
                          <textarea name="description" id="description" className="form-group"></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="btn-wrapper">
                      <a href="#" className="btn-style small">CREATE</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="additional-usage">
            <div className="container">
              <h2>Additional Usage</h2>
              <div className="row">
                <div className="col-md-6">
                  <div className="main-wrapper">
                    <strong><span>Create a</span> liquidity pool</strong>
                    <div className="select-wrapper">

                      <select className="form-select" aria-label="Default select example">
                        <option value="4">Select a token</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <a href="#" className="btn-style small">CREATE</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="main-wrapper">
                    <strong><span>Revoke</span> mint authority</strong>
                    <div className="select-wrapper">
                      <select className="form-select" aria-label="Default select example">
                        <option value="4">Select a token</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <a href="#" className="btn-style small">REVOKE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faqs">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="content-wrapper">
                <div className="icon-wrapper">
                  <img src={questionMarkIcon} alt="questionMarkIcon" />
                </div>
                <h2 className="large">Frequently Asked Questions</h2>
                <p>Dive into our FAQ to navigate the exciting features, opportunities, and roadmap of our project.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Lorem Ipsum
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Lorem Ipsum
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>Need support? Contact us: <a href="mailto:support@test.io">support@test.io</a></p>
      </footer>
    </div>
  )
}

export default HomePage
