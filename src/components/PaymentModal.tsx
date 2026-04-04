import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CreditCard, Smartphone, Globe, CheckCircle2, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PaymentModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [step, setStep] = useState<'method' | 'processing' | 'success'>('method');
  const [method, setMethod] = useState<'MTN' | 'Orange' | 'Sendwave' | null>(null);

  const handlePayment = async () => {
    setStep('processing');
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStep('success');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#166534', '#22c55e', '#ffffff']
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-xl text-green-900">Make a Payment</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {step === 'method' && (
              <motion.div 
                key="method"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -20, opacity: 0 }}
                className="space-y-6"
              >
                <div className="bg-green-50 p-4 rounded-2xl flex items-center justify-between">
                  <span className="text-sm text-green-700 font-medium">Amount Due</span>
                  <span className="text-2xl font-bold text-green-900">$45.00</span>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select Payment Method</p>
                  <button 
                    onClick={() => setMethod('MTN')}
                    className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                      method === 'MTN' ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200'
                    }`}
                  >
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-xs">MTN</div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">MTN Mobile Money</p>
                      <p className="text-xs text-gray-500">Pay using your MoMo account</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setMethod('Orange')}
                    className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                      method === 'Orange' ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200'
                    }`}
                  >
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">ORANGE</div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">Orange Money</p>
                      <p className="text-xs text-gray-500">Fast and secure mobile payment</p>
                    </div>
                  </button>
                  <button 
                    onClick={() => setMethod('Sendwave')}
                    className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 ${
                      method === 'Sendwave' ? 'border-green-600 bg-green-50' : 'border-gray-100 hover:border-green-200'
                    }`}
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">WAVE</div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900">Sendwave</p>
                      <p className="text-xs text-gray-500">International transfer support</p>
                    </div>
                  </button>
                </div>

                <button 
                  disabled={!method}
                  onClick={handlePayment}
                  className="w-full py-4 bg-green-700 text-white rounded-2xl font-bold hover:bg-green-800 transition-colors disabled:opacity-50"
                >
                  Confirm & Pay
                </button>
              </motion.div>
            )}

            {step === 'processing' && (
              <motion.div 
                key="processing"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="relative">
                  <div className="w-20 h-20 border-4 border-green-100 rounded-full"></div>
                  <div className="w-20 h-20 border-4 border-green-700 rounded-full border-t-transparent animate-spin absolute top-0"></div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-green-900">Processing Payment</h4>
                  <p className="text-gray-500 mt-2">Please do not close this window...</p>
                </div>
              </motion.div>
            )}

            {step === 'success' && (
              <motion.div 
                key="success"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-green-900">Payment Successful!</h4>
                  <p className="text-gray-500 mt-2">Your transaction has been completed successfully.</p>
                </div>
                <button 
                  onClick={onClose}
                  className="px-8 py-3 bg-green-700 text-white rounded-xl font-bold hover:bg-green-800 transition-colors"
                >
                  Back to Dashboard
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
