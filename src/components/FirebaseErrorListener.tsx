
'use client';

import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { useToast } from '@/hooks/use-toast';
import { FirestorePermissionError } from '@/firebase/errors';

export function FirebaseErrorListener() {
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = errorEmitter.on('permission-error', (error: FirestorePermissionError) => {
      toast({
        variant: "destructive",
        title: "خطأ في صلاحيات قاعدة البيانات",
        description: `تم رفض الوصول للمسار ${error.context.path}. يرجى التأكد من تفعيل Security Rules وتفعيل طرق الدخول في Firebase Console.`,
      });
    });

    return () => unsubscribe();
  }, [toast]);

  return null;
}
