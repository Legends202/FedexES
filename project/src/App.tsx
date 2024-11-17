import Navbar from './components/Navbar';
import TrackingSection from './components/TrackingSection';
import QuickLinks from './components/QuickLinks';
import ShippingManagement from './components/ShippingManagement';
import PromoSection from './components/PromoSection';
import AskFedEx from './components/AskFedEx';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <TrackingSection />
        <QuickLinks />
        <ShippingManagement />
        <PromoSection />
        <AskFedEx />
      </main>
      <Footer />
    </div>
  );
}