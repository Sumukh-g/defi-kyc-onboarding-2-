
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, CheckCircle, AlertCircle, Fingerprint } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

enum WalletStatus {
  NOT_STARTED,
  UPLOADING,
  ERROR,
  SUCCESS
}

const CreateWallet = () => {
  const [status, setStatus] = useState<WalletStatus>(WalletStatus.NOT_STARTED);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [fingerprintData, setFingerprintData] = useState<string>("");
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setIdFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!idFile) {
      setErrorMessage("Please upload a government ID");
      setStatus(WalletStatus.ERROR);
      return;
    }

    setStatus(WalletStatus.UPLOADING);
    
    // Simulate API call to backend
    try {
      // This would normally be an API call like:
      // const response = await axios.post('/api/createWallet', formData);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate a fake wallet address
      const randomWallet = "0x" + Array.from({length: 40}, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join("");
      
      setWalletAddress(randomWallet);
      setStatus(WalletStatus.SUCCESS);
    } catch (error) {
      setErrorMessage("An error occurred while creating your wallet. Please try again.");
      setStatus(WalletStatus.ERROR);
    }
  };

  const resetForm = () => {
    setIdFile(null);
    setFingerprintData("");
    setWalletAddress("");
    setErrorMessage("");
    setStatus(WalletStatus.NOT_STARTED);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const simulateFingerprintScan = () => {
    setFingerprintData("Fingerprint data captured");
  };

  return (
    <div className="flex-1 py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Create Your DeFi Wallet</h1>
          <p className="text-lg text-muted-foreground">
            Secure your identity and access decentralized financial services with a few simple steps.
          </p>
        </div>

        {status === WalletStatus.SUCCESS ? (
          <Card className="border-2 border-primary">
            <CardHeader className="text-center bg-primary/5">
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Wallet Created Successfully!</CardTitle>
              <CardDescription>Your decentralized identity wallet is ready to use</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="bg-muted rounded-lg p-4 mb-6 overflow-hidden">
                <p className="font-mono text-sm break-all">{walletAddress}</p>
              </div>
              <Alert className="bg-primary/10 border-primary/20">
                <AlertTitle className="flex items-center gap-2">
                  <Fingerprint className="h-4 w-4" />
                  Important
                </AlertTitle>
                <AlertDescription>
                  Your wallet address has been created. For security, we've also generated a recovery phrase which would be provided in a real application. Keep your recovery phrase safe and never share it with anyone.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={resetForm} 
                className="w-full bg-gradient-to-r from-defi-primary to-defi-secondary hover:opacity-90 transition-opacity"
              >
                Create Another Wallet
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Scan Your Government ID</CardTitle>
              <CardDescription>
                To create your secure wallet, we need to verify your identity once. Upload a photo of your government-issued ID.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {status === WalletStatus.ERROR && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
                )}
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="id-upload">Government ID</Label>
                    <div 
                      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50 transition-colors ${idFile ? 'border-primary' : 'border-border'}`}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <input
                        id="id-upload"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept="image/*"
                        className="hidden"
                      />
                      <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Upload className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-sm font-medium mb-1">
                        {idFile ? idFile.name : "Click to upload your ID"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Supports JPG, PNG, PDF up to 10MB
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fingerprint">Fingerprint (Optional)</Label>
                    <div className="flex gap-3">
                      <Input
                        id="fingerprint"
                        value={fingerprintData}
                        placeholder="Scan fingerprint for additional security"
                        readOnly
                        className="flex-1"
                      />
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={simulateFingerprintScan}
                      >
                        <Fingerprint className="h-4 w-4 mr-2" />
                        Scan
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleSubmit} 
                disabled={status === WalletStatus.UPLOADING} 
                className="w-full bg-gradient-to-r from-defi-primary to-defi-secondary hover:opacity-90 transition-opacity"
              >
                {status === WalletStatus.UPLOADING ? (
                  <>
                    <div className="h-4 w-4 mr-2 rounded-full border-2 border-t-transparent border-white animate-spin"></div>
                    Creating Wallet...
                  </>
                ) : (
                  "Create Wallet"
                )}
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
};

export default CreateWallet;
