import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Upload, Image, Trash2, Eye, CheckCircle, Clock, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

const MerchantDashboard = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [adTitle, setAdTitle] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
  };

  const handleNewAd = () => {
    setUploadedImage(null);
    setAdTitle("");
    setAdDescription("");
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <Link
              to="/merchant"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portal
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 py-12 px-6">
        <div className="container max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Advertisement Dashboard
            </h1>
            <p className="text-muted-foreground">
              Create and manage your advertisements for UniEasy
            </p>
          </div>

          {submitted ? (
            /* Success State */
            <div className="bg-card rounded-2xl border border-border p-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Advertisement Submitted!
              </h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Your advertisement has been submitted for review. We'll notify you once it's approved and live on UniEasy.
              </p>
              
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-lg">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm text-foreground">Review time: 24-48 hours</span>
                </div>
              </div>

              {uploadedImage && (
                <div className="mb-8">
                  <p className="text-sm text-muted-foreground mb-3">Submitted Advertisement:</p>
                  <div className="relative inline-block rounded-xl overflow-hidden border border-border">
                    <img 
                      src={uploadedImage} 
                      alt="Submitted ad" 
                      className="max-w-md max-h-64 object-cover"
                    />
                  </div>
                </div>
              )}

              <Button onClick={handleNewAd} size="lg">
                Create Another Advertisement
              </Button>
            </div>
          ) : (
            /* Upload Form */
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Image className="w-5 h-5 text-primary" />
                  Upload Advertisement Image
                </h2>

                {uploadedImage ? (
                  <div className="space-y-4">
                    <div className="relative rounded-xl overflow-hidden border border-border">
                      <img 
                        src={uploadedImage} 
                        alt="Uploaded preview" 
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={handleRemoveImage}
                        className="absolute top-3 right-3 w-10 h-10 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center hover:bg-destructive/90 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Click the X to remove and upload a different image
                    </p>
                  </div>
                ) : (
                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 hover:bg-muted/30 transition-all">
                      <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-foreground font-medium mb-2">
                        Drop your image here
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Recommended: 1200x628px • JPG, PNG • Max 5MB
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              {/* Details Section */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Advertisement Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Ad Title
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., 50% Off on All Pizzas!"
                      value={adTitle}
                      onChange={(e) => setAdTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Description (Optional)
                    </label>
                    <textarea
                      placeholder="Brief description of your offer..."
                      value={adDescription}
                      onChange={(e) => setAdDescription(e.target.value)}
                      className="w-full min-h-24 px-4 py-3 bg-background border border-input rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Target Location
                    </label>
                    <Input
                      type="text"
                      placeholder="e.g., Near VIT University, Vellore"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Duration
                    </label>
                    <select className="w-full px-4 py-3 bg-background border border-input rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="7">7 Days</option>
                      <option value="14">14 Days</option>
                      <option value="30">30 Days</option>
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={!uploadedImage || !adTitle}
                  >
                    Submit for Review
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to our advertising guidelines and terms of service.
                  </p>
                </form>
              </div>
            </div>
          )}

          {/* Tips Section */}
          {!submitted && (
            <div className="mt-12 bg-muted/30 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Tips for Effective Advertisements
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">Clear Visuals</h4>
                  <p className="text-sm text-muted-foreground">
                    Use high-quality images that clearly show your product or offer.
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">Strong CTA</h4>
                  <p className="text-sm text-muted-foreground">
                    Include a clear call-to-action like "Visit Now" or "Order Today".
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">Limited Time</h4>
                  <p className="text-sm text-muted-foreground">
                    Create urgency with time-limited offers to drive action.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default MerchantDashboard;
