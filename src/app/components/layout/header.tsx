import { Upload, User, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <Upload className="h-6 w-6 text-blue-500" />
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">FileCloud</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Settings className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}