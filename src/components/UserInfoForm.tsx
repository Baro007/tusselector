import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, User, ArrowRight, AlertCircle } from 'lucide-react';
import { useForm as useFormContext } from '../context/FormContext';

const schema = yup.object({
  email: yup.string()
    .email('Geçerli bir e-posta adresi giriniz')
    .required('E-posta adresi gereklidir'),
  name: yup.string()
    .required('İsim gereklidir')
    .min(2, 'İsim en az 2 karakter olmalıdır'),
}).required();

type FormInputs = {
  email: string;
  name: string;
};

export default function UserInfoForm({ onNext }: { onNext: () => void }) {
  const { dispatch } = useFormContext();
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormInputs) => {
    dispatch({ type: 'SET_USER_INFO', payload: data });
    onNext();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-md mx-auto p-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-primary to-secondary">
          Kendinizi Tanıtın
        </h2>
        <p className="text-text-light mt-2">
          Size özel öneriler sunabilmemiz için lütfen bilgilerinizi girin
        </p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">İsim</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" 
                  size={20} />
            <input
              {...register('name')}
              type="text"
              className="input pl-10"
              placeholder="Adınız Soyadınız"
            />
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-error text-sm flex items-center gap-1"
            >
              <AlertCircle size={16} />
              {errors.name.message}
            </motion.p>
          )}
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">E-posta</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light" 
                 size={20} />
            <input
              {...register('email')}
              type="email"
              className="input pl-10"
              placeholder="ornek@email.com"
            />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-error text-sm flex items-center gap-1"
            >
              <AlertCircle size={16} />
              {errors.email.message}
            </motion.p>
          )}
        </div>

        <motion.button
          type="submit"
          className="btn btn-primary w-full group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Devam Et
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </motion.button>
      </form>

      <p className="text-text-light text-sm text-center mt-6">
        Bilgileriniz gizli tutulacak ve üçüncü taraflarla paylaşılmayacaktır
      </p>
    </motion.div>
  );
}