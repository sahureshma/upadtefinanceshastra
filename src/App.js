// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Register from "./Register/Register";
import Market from "./Market/Market";
import GoldETF from "./GoldETF/GoldETF";
import Stocktable from "./StockList/StockList";
import ProfitLossTable from "./ProfitLossTable/ProfitLossTable";
import BalanceSheet from "./BalanceSheet/BalanceSheet";
import Header from "./header/header";
import Overview from "./StockOverview/Overview";

import Smallcap from "./Smallcapstock/Smallcapstock";
import Midcap from "./Midcapstock/Midcapstock";
import Largecap from "./Largecapstock/Largecapstock";
import NiftyStocks from "./Nifty50stock/Nifty50stock";
import Highstock from "./Highstock/Highstock";
import Beststock from "./Beststock/Beststock";
import Netify500 from "./NiftyStocksTable/NiftyStocksTable";
import Portfolio from "./Portfoilo/Portfoliomanager/Portfoliomanager";
import NetWorthStocksDashboard from "./Portfoilo/NetWorthStocksDashboard/NetWorthStocksDashboard";
import PortfolioAccountStock from "./Portfoilo/PortfolioAccountStock/PortfolioAccountStock";
import AccountStockfundamental from "./Portfoilo/AccountStockfundamental/AccountStockfundamental";
import AccountStockalert from "./Portfoilo/AccountStockalerts/AccountStockalerts";
import AccountStockreturn from "./Portfoilo/AccountStockreturn/AccountStockreturn";
import Portfoliodonut from "./Portfoilo/Portfoliodonut/Portfoliodonut";
import OverviewPortfolioManager from "./Portfoilo/OverviewPortfoliograph/OverviewPortfoliograph";
import PortfolioStocksector from "./Portfoilo/PortfolioStocksector/PortfolioStocksector";
import PortfolioStockmcap from "./Portfoilo/PortfolioStockmcap/PortfolioStockmcap";
import AddTransactionstock from "./Portfoilo/AddTransactionstock/AddTransactionstock";
import Deletepopupstock from "./Portfoilo/Deletepopupstock/Deletepopupstock";

import UpdateTransaction from "./Portfoilo/UpdateTransactionstock/UpdateTransactionstock";
import Mutualnone from "./Portfoilo/Mutualnone/Mutualnone";
import Mutualtypefund from "./Portfoilo/Mutualtypefund/Mutualtypefund";
import Mutualsector from "./Portfoilo/Mutualsector/Mutualsector";
import MutualAccountStock from "./Portfoilo/Mutualtransaction/Mutualtransaction";
import OverviewMutual from "./Portfoilo/Mutualoverview/Mutualoverview";
import Accountmutualperformance from "./Portfoilo/Mutualperformance/Mutualperformance";

import StockWatchlist from "./Portfoilo/StockWatchlist/StockWatchlistnone";


import SubscriptionPlans from "./Subscription/PricingTablehalfyear/PricingTablehalfyear";
import SubscriptionannualPlans from "./Subscription/Subscriptionannualplan/Subscriptionannualplan";

import TopRatedFunds from "./MutualFund/TopRatedFunds/TopRatedFunds";
import TopRatedFundsdirect from "./MutualFund/TopRatedFundsdirect/TopRatedFundsdirect";
import GoldWatchportall from "./Portfoilo/Goldwatchlistall/Goldwatchlistall";
import Portfoliogoldaccount from "./Portfoilo/Portfoliogoldaccount/Portfoliogoldaccount";

import PaymentForm from "./Subscription/Paymentmethodsubscribe/Paymentmethodsubscribe";
import StockWatchportall from "./Portfoilo/StockWatchlistall/StockWatchlistall";
import StockWatchsectormcap from "./Portfoilo/StockWatchlistmcap/StockWatchlistmcap";
import StockWatchsectorlist from "./Portfoilo/StockWatchlistsector/StockWatchlistsector";
import MutualWatchlist from "./Portfoilo/Mutualfundwatchlistportfolio/Mutualfundwatchlistportfolio";
import MutualWatchtypefundlist from "./Portfoilo/Mutualfundwtchlisttypefund/Mutualfundwtchlisttypefund";
import MutualWatchsectorlist from "./Portfoilo/Mutualsectorportwatchlist/Mutualsectorportwatchlist";
import MutualWatchportall from "./Portfoilo/Mutualwatchportall/Mutualwatchportall";
import ElitepaymentForm from "./Subscription/Elitepaymentsubscribe/Elitepaymentsubscribe";
import Eliteplanhalfyear from "./Subscription/Eliteplanhalfyear/Eliteplanhalfyear";
import LocalPaymentPremiumForm from "./Subscription/Localpaymentpremium/Localpaymentpremium";
import LocalhalfPremiumForm from "./Subscription/Premiumlocalhalf/Premiumlocalhalf";
import ElitePaymentPremiumForm from "./Subscription/Elitelocalannualpayment/Elitelocalannualpayment";
import ElitePaymenthalfForm from "./Subscription/Elitelocalhalfpayment/Elitelocalhalfpayment";
import UpiPaymentFormpremium from "./Subscription/Upiannualpremium/Upiannualpremium";
import Upihalfyearpremium from "./Subscription/Upihalfyearpremium/Upihalfyearpremium";
import UpiPaymentFormelite from "./Subscription/Upiannualelite/Upiannualelite";
import UpihalfyearFormelite from "./Subscription/Upihalfyearelite/Upihalfyearelite";
import Premiumplanhalfyear from "./Subscription/Premiumplanhalfyear/Premiumplanhalfyear";
import Bestsmallcapregular from "./MutualFund/Bestsmallcapregular/Bestsmallcapregular";
import Bestsmallcapdirect from "./MutualFund/Smallcapdirect/Smallcapdirect";

import MutualkeyIndicators from "./MutualFund/Mutualkeyindicator/Mutualkeyindicator";
import Mutualxray from "./MutualFund/Mutualxray/Mutualxray";
import Mutualfund from "./MutualFund/Mutualfundall/Mutualfundall";
import Mutualgraphtop from "./MutualFund/Mutualgraphtop/Mutualgraphtop";
import MutualFundsSipCalculator from "./MutualFund/MutualFundsSipCalculator/MutualFundsSipCalculator";
import Flexdirect from "./MutualFund/Mutualflexdirect/Mutualflexdirect";
import Flexregular from "./MutualFund/Mutualflexregular/Mutualflexregular";
import FundContactInfo from "./FundContactInfo/FundContactInfo";
import RiskOMeter from "./MutualFund/Fundriskometer/Fundriskometer";
import Fundscreenerdirect from "./MutualFund/Fundscreenerdirect/Fundscreenerdirect";
import Fundscreenerregular from "./MutualFund/Fundscreenerregular/Fundscreenerregular";
import Bestgrowthregular from "./MutualFund/Bestgrowth/Bestgrowth";
import Bestgrowthdirect from "./MutualFund/Bestgrowthdirect/Bestgrowthdirect";
import Etfregular from "./MutualFund/Etfmutualfundregular/Etfmutualfundregular";
import Etfdirect from "./MutualFund/Etfmutualfunddirect/Etfmutualfunddirect";
import StockNewsComponent from "./Learn/StockNewsComponent/StockNewsComponent";
import StockNewsCard from "./Learn/StockNewsCard/StockNewsCard";
import StocknewsAdanigroup from "./Learn/StocknewsAdanigroup/StocknewsAdanigroup";
import BlogsComponent from "./Learn/Bolgs/Blogscomponent/Blogscomponent";
import ScreenerStockList from "./Login/Stock/ScreenerStockList/ScreenerStockList";
import Bloginvestment from "./Learn/Bolgs/Blogsinvestment/Blogsinvestment";
import BlogFilter from "./Learn/Bolgs/Blogsfilter/Blogsfilter";
import Blogpmscard from "./Learn/Bolgs/Pmsblogcard/Pmsblogcard";
import Learncard from "./Learn/Learnall/Learncard/Learncard";
import CommentSection from "./Learn/Bolgs/Comment/Comment";
import ScreenerStock from "./Login/Stock/Stockscreen/Stockscreen";
import Learncardaftersignup from "./Learn/Learnall/Learncardaftersignup/Learncardaftersignup";
import LearnCourseDetails from "./Learn/Learnall/Learncoursedetail/Learncoursedetail";
import ModulecourseDetails from "./Learn/Learnall/Modulelearncourse/Modulelearncourse";
import IpoComponent from "./Learn/IPO/Ipopage/Ipopage";
import IpoDetails from "./Learn/IPO/Ipocarddetail/Ipocarddetail";
import IpoDetailsubscribe from "./Learn/IPO/Ipoaftersubscribe/Ipoaftersubscribe";

import EarningsInsightLearn from "./Learn/Quaterlyearning/EarningsInsightLearn/EarningsInsightLearn";
import Earninginsightheader from "./Learn/Quaterlyearning/Earninginsightdetailheader/Earninginsightdetailheader";
import DataDisplayEarnings from "./Learn/Quaterlyearning/DataDisplayEarnings/DataDisplayEarnings";
import Quaterlygraphtop from "./Learn/Quaterlyearning/Quaterlygraphtop/Quaterlygraphtop";
import Nifty50page from "./Stockpages/Nifty50page/Nifty50page";
import QuaterelyOverview from "./Learn/Quaterlyearning/Quaterlyearningoverview/Quaterlyearningoverview";
import QuaterlynewsList from "./Learn/Quaterlyearning/Quaterlynews/Quaterlynews";
import QuarterlyEarningsReport from "./Learn/Quaterlyearning/Quaterlyearningdetailreport/Quaterlyearningdetailreport";
import QuarterlyEarningdetailincome from "./Learn/Quaterlyearning/Quaterlyearningincome/Quaterlyearningincome";
import Quarterlybalancesheet from "./Learn/Quaterlyearning/Quaterlyearnbalancesheet/Quaterlyearnbalancesheet";
import QuarterlyCashflow from "./Learn/Quaterlyearning/Quaterlycashflow/Quaterlycashflow";
import Quarterlyratio from "./Learn/Quaterlyearning/Quaterlyratio/Quaterlyratio";
import Quarterlypeer from "./Learn/Quaterlyearning/Quaterlypeer/Quaterlypeer";
import QuaterlyKeyIndicators from "./Learn/Quaterlyearning/Quaterlykeyindicator/Quaterlykeyindicator";
import Quaterlyabout from "./Learn/Quaterlyearning/Quaterlyabout/Quaterlyabout";
import Watchlistdashboardmain from "./Homepagenew/Watchlistdashboardmain/Watchlistdashboardmain";
import Dashboardchartmain from "./Homepagenew/Dashboardgraph/Dashboardgraph";
import DashboardMainPagetable from "./Homepagenew/DashboardMainPagetable/DashboardMainPagetable";
import Stockindexall from "./Homepagenew/Stockindexallpage/Stockindexallpage";
import Stockcalender from "./Homepagenew/Stockcalender/Stockcalender";
import Calenderchartmain from "./Homepagenew/Stockcalendergraph/Stockcalendergraph";
import Homestockanalyst from "./Homepagenew/Homestockanalyst/Homestockanalyst";
import Stockanalystall from "./Homepagenew/Homeanalystall/Homeanalystall";
import UserDetails from "./Profiledetails/UserDetails/UserDetails";
import PlanSelection from "./Profiledetails/profileelitepremium/profileelitepremium";
import SessionHistory from "./Profiledetails/SessionHistory/SessionHistory";
import AccountSettings from "./Profiledetails/AccountSettings/AccountSettings";
import OrderTable from "./Profiledetails/OrderTable/OrderTable";
import Managealert from "./Profiledetails/Managealert/Managealert";
import ContactFormmanagealert from "./Profiledetails/ContactFormmanagealert/ContactFormmanagealert";
import EditProfile from "./Profiledetails/EditProfile/EditProfile";
import UserDetailsupdate from "./Profiledetails/Userupdatedpage/Userupdatedpage";





function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market/>} />
      <Route path="/gold" element={<GoldETF/>} />
      <Route path="/stock" element={<Stocktable/>} />
      <Route path="/header" element={<Header/>} />
      <Route path="/profitloss" element={<ProfitLossTable/>} />
      <Route path="/balance-sheet" element={<BalanceSheet/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/stockhandle" element={<Overview/>} />
      <Route path="/nifty" element={<Netify500/>} />
      <Route path="/smallcap" element={<Smallcap/>} />
      <Route path="/midcap" element={<Midcap/>} />
      <Route path="/largecap" element={<Largecap/>} />
      <Route path="/niftystock" element={<NiftyStocks/>} />
      <Route path="/highgrowth" element={<Highstock/>} />
      <Route path="/beststock" element={<Beststock/>} />
      <Route path="/portfolio" element={<Portfolio/>} />
      <Route path="/portfoliostock" element={<NetWorthStocksDashboard/>} />
      <Route path="/portfoliodonut" element={<Portfoliodonut/>} />
     <Route path="/portfoliostockaccount" element={<PortfolioAccountStock/>} />
      <Route path="/accountfund" element={<AccountStockfundamental/>} />
      <Route path="/accountalert" element={<AccountStockalert/>} />
      <Route path="/accountreturn" element={<AccountStockreturn/>} />
      <Route path="/overview" element={<OverviewPortfolioManager/>} />
      <Route path="/stocksector" element={<PortfolioStocksector/>} />
      <Route path="/stockmcap" element={<PortfolioStockmcap/>} />
      <Route path="/stockadd" element={<AddTransactionstock/>} />
      <Route path="/stockupdate" element={<UpdateTransaction/>} />
      <Route path="/stockdelete" element={<Deletepopupstock/>} />
      <Route path="/mutualsector" element={<Mutualsector/>} />
      <Route path="/mutualnone" element={<Mutualnone/>} />
      <Route path="/mutualtype" element={<Mutualtypefund/>} />
      <Route path="/mutualaccount" element={<MutualAccountStock/>} />
      <Route path="/mutualoverview" element={<OverviewMutual/>} />
      <Route path="/accountperformance" element={<Accountmutualperformance/>} />
      <Route path="/stockwatchlist" element={<StockWatchlist/>} />
      <Route path="/stockwatchlistsector" element={<StockWatchsectorlist/>} />
      <Route path="/stockwatchlistmcap" element={<StockWatchsectormcap/>} />
      <Route path="/stockwatchlistall" element={<StockWatchportall/>} />
      <Route path="/pricehalf" element={<SubscriptionPlans/>} />
      <Route path="/annualplan" element={<SubscriptionannualPlans/>} />
     
      <Route path="/goldWatchlistall" element={<GoldWatchportall/>} />
      <Route path="/portfoliogoldtoppage" element={<Portfoliogoldaccount />} />
     <Route path="/payment" element={<PaymentForm/>} />
      <Route path="/mutualwatchlist" element={<MutualWatchlist/>} />
      <Route path="/mutualwatchlisttype" element={<MutualWatchtypefundlist/>} />
      <Route path="/mutualwatchlistsector" element={<MutualWatchsectorlist/>} />
      <Route path="/mutualwatchlistall" element={<MutualWatchportall/>} />
      <Route path="/paymentform" element={<PaymentForm/>} />
      <Route path="/elitepaymentForm" element={<ElitepaymentForm/>} />
      <Route path="/eliteplanhalfyear" element={<Eliteplanhalfyear/> }/>
      <Route path="/localpaymentpremiumForm" element={<LocalPaymentPremiumForm/> }/>
      <Route path="/localhalfpremiumForm" element={<LocalhalfPremiumForm/> }/>
      <Route path="/elitePaymentPremiumForm" element={<ElitePaymentPremiumForm/> }/>
      <Route path="/elitePaymenthalfForm" element={<ElitePaymenthalfForm/> }/>
      <Route path="/upiPaymentFormpremium" element={<UpiPaymentFormpremium/> }/>
      <Route path="/upihalfyearpremium" element={<Upihalfyearpremium/>}/>
      <Route path="/upiPaymentFormelite" element={<UpiPaymentFormelite/>}/>
      <Route path="/upihalfyearFormelite" element={<UpihalfyearFormelite/>}/>
      <Route path="/premiumplanhalfyear" element={<Premiumplanhalfyear/> }/>
      <Route path="/bestsmallcapregular" element={<Bestsmallcapregular/> }/>
      <Route path="/bestsmallcapdirect" element={<Bestsmallcapdirect/> }/>
   
      <Route path="/MutualkeyIndicators" element={<MutualkeyIndicators/> }/>
      <Route path="/mutualxray" element={<Mutualxray/> }/> 
      <Route path="/mutualfund" element={<Mutualfund/> }/>
      <Route path="/topRatedFunds" element={<TopRatedFunds/>} />
      <Route path="/mutualfunddirect" element={<TopRatedFundsdirect/>} />
      <Route path="/mutualgraphtop" element={<Mutualgraphtop/>} />
      <Route path="/mutualFundsSipCalculator" element={<MutualFundsSipCalculator/>} />
      <Route path="/mutualflex" element={<Flexdirect/>} />
      <Route path="/mutualflexregular" element={<Flexregular/>} />
      <Route path="/fundcontactinfo" element={<FundContactInfo/>} />
      <Route path="/fundriskometer" element={<RiskOMeter/>} />
      <Route path="/fundscreenerdirect" element={<Fundscreenerdirect/>} />
      <Route path="/fundscreenerregular" element={<Fundscreenerregular/>} />
      <Route path="/bestgrowthregular" element={<Bestgrowthregular/>} />
      <Route path="/bestgrowthdirect" element={<Bestgrowthdirect/>} />
      <Route path="/etfregular" element={<Etfregular/>} />
      <Route path="/etfdirect" element={<Etfdirect/>} />
      <Route path="/stockNewsComponent" element={<StockNewsComponent/>} />
      <Route path="/stockNewsCard/:id" element={<StockNewsCard/>} />
      <Route path="/stocknewsAdanigroup/:id" element={<StocknewsAdanigroup/>} />
      <Route path="/blogsComponent" element={<BlogsComponent/>} />
      <Route path="/screenerStockList" element={<ScreenerStockList/>}/>  
      <Route path="/bloginvestment/:id" element={<Bloginvestment/>}/> 
      <Route path="/blogFilter" element={<BlogFilter/>}/>   
      <Route path="/blogpmscard/:id" element={<Blogpmscard/>}/>
      <Route path="/learncard" element={< Learncard/>}/>
      <Route path="/commentSection" element={< CommentSection/>}/>
      <Route path="/screenerStock" element={< ScreenerStock/>}/>
      <Route path="/learncardaftersignup" element={<Learncardaftersignup/>}/>
      <Route path="/learnCourseDetails" element={<LearnCourseDetails/>}/>
      <Route path="/modulecourseDetails" element={<ModulecourseDetails/>}/>
      <Route path="/ipoComponent" element={<IpoComponent/>}/>
      <Route path="/ipoDetails/:id" element={<IpoDetails/>}/>
      <Route path="/ipoDetailsubscribe" element={<IpoDetailsubscribe/>}/>
      <Route path="/dataDisplayEarnings" element={<DataDisplayEarnings/>}/>
    
    
      <Route path="/earningsInsightLearn" element={<EarningsInsightLearn/>}/> 
      <Route path="/earninginsightheader" element={<Earninginsightheader/>}/>
      <Route path="/quaterlygraphtop" element={<Quaterlygraphtop/>}/>
      <Route path="/nifty50page" element={<Nifty50page/>}/>
      <Route path="/quaterelyOverview" element={<QuaterelyOverview/>}/>
      <Route path="/quaterlynewsList" element={<QuaterlynewsList/>}/>
      <Route path="/qquarterlyEarningsReport" element={<QuarterlyEarningsReport/>}/>
      <Route path="/quarterlyEarningdetailincome" element={<QuarterlyEarningdetailincome/>}/>
      <Route path="/quarterlybalancesheet" element={<Quarterlybalancesheet/>}/>
      <Route path="/quarterlyCashflow" element={<QuarterlyCashflow/>}/>
      <Route path="/quarterlyratio" element={<Quarterlyratio/>}/>
      <Route path="/quarterlypeer" element={<Quarterlypeer/>}/>
      <Route path="/quaterlyKeyIndicators" element={<QuaterlyKeyIndicators/>}/>
      <Route path="/quaterlyKeyIndicators" element={<QuarterlyEarningdetailincome/>}/>
      <Route path="/quaterlyabout" element={<Quaterlyabout/>}/>
      <Route path="/watchlistdashboardmain" element={<Watchlistdashboardmain/>}/>
      <Route path="/dashboardMainPagetable" element={<DashboardMainPagetable/>}/>
      <Route path="/dashboardchartmain" element={<Dashboardchartmain/>}/>
      <Route path="/stockindexall" element={<Stockindexall/>}/>
      <Route path="/stockcalender" element={<Stockcalender/>}/>
      <Route path="/calenderchartmain" element={<Calenderchartmain/>}/>
      <Route path="/homestockanalyst" element={<Homestockanalyst/>}/>
      <Route path="/stockanalystall" element={<Stockanalystall/>}/>
      <Route path="/userDetails" element={<UserDetails/>}/>
      <Route path="/planSelection" element={<PlanSelection/>}/>
      <Route path="/sessionHistory" element={<SessionHistory/>}/>
      <Route path="/accountSettings" element={<AccountSettings/>}/>
      <Route path="/orderTable" element={<OrderTable/>}/>
      <Route path="/managealert" element={<Managealert/>}/>
    
      <Route path="/contactFormmanagealert" element={<ContactFormmanagealert/>}/>
      <Route path="/editProfile" element={<EditProfile/>} /> 
      <Route path="/userDetailsupdate" element={<UserDetailsupdate/>} />

  
    
     
    







      
    </Routes>
   
  );
}

export default App;
