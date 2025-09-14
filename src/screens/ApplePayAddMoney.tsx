import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ApplePayAddMoney = () => {
  const [amount, setAmount] = useState('25');
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNumberPress = (number: string) => {
    if (amount === '0' || amount === '25') {
      setAmount(number);
    } else {
      setAmount(prev => prev + number);
    }
  };

  const handleBackspace = () => {
    if (amount.length > 1) {
      setAmount(prev => prev.slice(0, -1));
    } else {
      setAmount('0');
    }
  };

  const handleDecimal = () => {
    if (!amount.includes('.')) {
      setAmount(prev => prev + '.');
    }
  };

  const StatusBarComponent = () => (
    <View style={styles.statusBar}>
      <View style={styles.statusLeft}>
        <Text style={styles.statusText}>17:53</Text>
        <Text style={styles.statusText}>🌙</Text>
      </View>
      <View style={styles.statusRight}>
        <View style={styles.signalBars}>
          <View style={[styles.bar, { height: 4 }]} />
          <View style={[styles.bar, { height: 6 }]} />
          <View style={[styles.bar, { height: 8 }]} />
          <View style={[styles.bar, { height: 10 }]} />
        </View>
        <View style={styles.wifiIcon} />
        <View style={styles.battery}>
          <View style={styles.batteryIcon} />
          <Text style={styles.statusText}>98</Text>
        </View>
      </View>
    </View>
  );

  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>
      <View style={styles.headerContent}>
        <Text style={styles.headerTitle}>Add money</Text>
        <Text style={styles.balance}>Balance: $0.15</Text>
      </View>
      <View style={styles.placeholder} />
    </View>
  );

  const AmountDisplay = () => (
    <View style={styles.amountContainer}>
      <View style={styles.amountRow}>
        <Text style={styles.amountText}>${amount}</Text>
        {showCursor && <View style={styles.cursor} />}
      </View>
    </View>
  );

  const PaymentMethod = () => (
    <TouchableOpacity style={styles.paymentMethod}>
      <View style={styles.applePayLogo}>
        <Text style={styles.applePayText}>🍎</Text>
      </View>
      <Text style={styles.paymentText}>Apple Pay • AUD</Text>
      <Text style={styles.dropdownArrow}>▼</Text>
    </TouchableOpacity>
  );

  interface KeypadButtonProps {
    onPress: () => void;
    children: React.ReactNode;
    style?: any;
  }

  interface OperationButtonProps {
    children: React.ReactNode;
    onPress?: () => void;
  }

  interface NumberKeyProps {
    number: string;
    letters?: string;
    onPress: (number: string) => void;
  }

  const KeypadButton = ({ onPress, children, style }: KeypadButtonProps) => (
    <TouchableOpacity
      style={[styles.key, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {children}
    </TouchableOpacity>
  );

  const OperationButton = ({ children, onPress }: OperationButtonProps) => (
    <TouchableOpacity
      style={styles.operationKey}
      onPress={onPress}
      activeOpacity={0.3}
    >
      <Text style={styles.operationKeyText}>{children}</Text>
    </TouchableOpacity>
  );

  const NumberKey = ({ number, letters, onPress }: NumberKeyProps) => (
    <KeypadButton onPress={() => onPress(number)}>
      <Text style={styles.keyNumber}>{number}</Text>
      {letters && <Text style={styles.keyLetters}>{letters}</Text>}
    </KeypadButton>
  );

  const Keypad = () => (
    <View style={styles.keypad}>
      {/* Operation buttons */}
      <View style={styles.operationRow}>
        <OperationButton>+</OperationButton>
        <OperationButton>-</OperationButton>
        <OperationButton>x</OperationButton>
        <OperationButton>/</OperationButton>
        <OperationButton>=</OperationButton>
      </View>

      {/* Number pad */}
      <View style={styles.numberGrid}>
        <NumberKey number="1" letters="" onPress={handleNumberPress} />
        <NumberKey number="2" letters="ABC" onPress={handleNumberPress} />
        <NumberKey number="3" letters="DEF" onPress={handleNumberPress} />
        
        <NumberKey number="4" letters="GHI" onPress={handleNumberPress} />
        <NumberKey number="5" letters="JKL" onPress={handleNumberPress} />
        <NumberKey number="6" letters="MNO" onPress={handleNumberPress} />
        
        <NumberKey number="7" letters="PQRS" onPress={handleNumberPress} />
        <NumberKey number="8" letters="TUV" onPress={handleNumberPress} />
        <NumberKey number="9" letters="WXYZ" onPress={handleNumberPress} />

        <KeypadButton onPress={handleDecimal}>
          <Text style={styles.keyNumber}>•</Text>
        </KeypadButton>
        <NumberKey number="0" letters="" onPress={handleNumberPress} />
        <KeypadButton onPress={handleBackspace}>
          <Text style={[styles.keyNumber, { fontSize: 28 }]}>⌫</Text>
        </KeypadButton>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <StatusBarComponent />
      <Header />
      
      <View style={styles.mainContent}>
        <AmountDisplay />
        <PaymentMethod />
        <View style={styles.arrivalInfo}>
          <Text style={styles.arrivalText}>Arriving • Usually instantly</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.applePayButton}>
        <Text style={styles.applePayButtonText}>🍎 Pay</Text>
      </TouchableOpacity>

      <Keypad />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  statusLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statusRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  signalBars: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'flex-end',
  },
  bar: {
    width: 3,
    backgroundColor: 'white',
    borderRadius: 1,
  },
  wifiIcon: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 3,
  },
  battery: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  batteryIcon: {
    width: 25,
    height: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  backButton: {
    padding: 5,
  },
  backArrow: {
    color: 'white',
    fontSize: 24,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  balance: {
    color: '#8E8E93',
    fontSize: 14,
  },
  placeholder: {
    width: 34, // Balance the back button
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  amountContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountText: {
    color: 'white',
    fontSize: 72,
    fontWeight: '300',
    letterSpacing: -2,
  },
  cursor: {
    width: 3,
    height: 72,
    backgroundColor: '#007AFF',
    marginLeft: 5,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    gap: 10,
  },
  applePayLogo: {
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applePayText: {
    fontSize: 12,
  },
  paymentText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  dropdownArrow: {
    color: 'white',
    fontSize: 14,
    marginLeft: 10,
  },
  arrivalInfo: {
    marginTop: 60,
  },
  arrivalText: {
    color: '#8E8E93',
    fontSize: 16,
    textAlign: 'center',
  },
  applePayButton: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  applePayButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  keypad: {
    backgroundColor: '#1C1C1E',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  operationRow: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
    height: 40,
  },
  numberGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  key: {
    backgroundColor: '#48484A',
    height: 70,
    flex: 1,
    maxWidth: (width - 70) / 3, // Account for padding and gaps
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  keyNumber: {
    color: 'white',
    fontSize: 32,
    fontWeight: '300',
  },
  keyLetters: {
    color: '#8E8E93',
    fontSize: 11,
    fontWeight: '400',
    letterSpacing: 1.8,
    marginTop: -2,
  },
  operationKey: {
    backgroundColor: 'transparent',
    height: 40,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0,
    elevation: 0,
  },
  operationKeyText: {
    color: '#8E8E93',
    fontSize: 20,
    fontWeight: '300',
  },
});

export default ApplePayAddMoney;
