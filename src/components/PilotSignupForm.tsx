import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const pilotSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  company: z.string().trim().min(1, 'Company is required').max(100),
  teamSize: z.string().trim().min(1, 'Team size is required'),
  contact: z.string().trim().min(1, 'WhatsApp or Email is required').max(255),
  useCase: z.string().trim().min(10, 'Please describe your use case (min 10 characters)').max(1000)
});

type PilotFormData = z.infer<typeof pilotSchema>;

const PilotSignupForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PilotFormData>({
    resolver: zodResolver(pilotSchema)
  });

  const onSubmit = async (data: PilotFormData) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Pilot request received!",
        description: "We'll contact you within 24 hours to schedule your 4-week pilot.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto bg-card rounded-2xl p-8 shadow-premium-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="name" className="text-foreground">Name</Label>
          <Input id="name" {...register('name')} className="mt-2" />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
        </div>
        
        <div>
          <Label htmlFor="company" className="text-foreground">Company</Label>
          <Input id="company" {...register('company')} className="mt-2" />
          {errors.company && <p className="text-sm text-destructive mt-1">{errors.company.message}</p>}
        </div>
        
        <div>
          <Label htmlFor="teamSize" className="text-foreground">Team Size</Label>
          <Input id="teamSize" placeholder="e.g., 25 people" {...register('teamSize')} className="mt-2" />
          {errors.teamSize && <p className="text-sm text-destructive mt-1">{errors.teamSize.message}</p>}
        </div>
        
        <div>
          <Label htmlFor="contact" className="text-foreground">WhatsApp or Email</Label>
          <Input id="contact" placeholder="+1234567890 or email@company.com" {...register('contact')} className="mt-2" />
          {errors.contact && <p className="text-sm text-destructive mt-1">{errors.contact.message}</p>}
        </div>
      </div>
      
      <div className="mt-6">
        <Label htmlFor="useCase" className="text-foreground">Use Case</Label>
        <Textarea 
          id="useCase" 
          placeholder="Tell us about your team and what you want to improve..."
          {...register('useCase')} 
          className="mt-2 min-h-[120px]"
        />
        {errors.useCase && <p className="text-sm text-destructive mt-1">{errors.useCase.message}</p>}
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full mt-6 btn-primary justify-center">
        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isSubmitting ? 'Submitting...' : 'Start Your Pilot'}
      </Button>
    </form>
  );
};

export default PilotSignupForm;
