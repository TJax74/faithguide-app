
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext.jsx';
import { Toaster } from '@/components/ui/toaster.jsx';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProtectedRoute from '@/components/ProtectedRoute.jsx';

import HomePage from '@/pages/HomePage.jsx';
import LoginPage from '@/pages/LoginPage.jsx';
import SignupPage from '@/pages/SignupPage.jsx';
import PasswordResetPage from '@/pages/PasswordResetPage.jsx';
import UserDashboard from '@/pages/UserDashboard.jsx';
import UserProfilePage from '@/pages/UserProfilePage.jsx';
import NotificationSettings from '@/pages/NotificationSettings.jsx';
import BibleReaderPage from '@/pages/BibleReaderPage.jsx';
import SearchPage from '@/pages/SearchPage.jsx';
import SavedVersesPage from '@/pages/SavedVersesPage.jsx';
import MyFavoritesPage from '@/pages/MyFavoritesPage.jsx';
import MyLibrary from '@/pages/MyLibrary.jsx';
import DailyDevotionalsPage from '@/pages/DailyDevotionalsPage.jsx';
import DevotionalLibraryPage from '@/pages/DevotionalLibraryPage.jsx';
import DevotionalDetailPage from '@/pages/DevotionalDetailPage.jsx';
import DevotionalReaderPage from '@/pages/DevotionalReaderPage.jsx';
import VersOfTheDayPage from '@/pages/VersOfTheDayPage.jsx';
import AboutFaithGuidePage from '@/pages/AboutFaithGuidePage.jsx';
import EnhancedDashboard from '@/pages/EnhancedDashboard.jsx';

import ReadingPlansPage from '@/pages/ReadingPlansPage.jsx';
import MyReadingPlansPage from '@/pages/MyReadingPlansPage.jsx';
import DailyAssignmentPage from '@/pages/DailyAssignmentPage.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/reset-password" element={<PasswordResetPage />} />
              <Route path="/about" element={<AboutFaithGuidePage />} />
              
              {/* Bible & Reading */}
              <Route path="/bible" element={<BibleReaderPage />} />
              <Route path="/bible-reader" element={<BibleReaderPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/verse-of-the-day" element={<VersOfTheDayPage />} />
              
              {/* Reading Plans */}
              <Route path="/reading-plans" element={<ReadingPlansPage />} />
              <Route path="/my-reading-plans" element={<ProtectedRoute><MyReadingPlansPage /></ProtectedRoute>} />
              <Route path="/daily-assignment/:planId" element={<ProtectedRoute><DailyAssignmentPage /></ProtectedRoute>} />
              
              {/* Devotionals */}
              <Route path="/daily-devotionals" element={<DailyDevotionalsPage />} />
              <Route path="/devotional-library" element={<DevotionalLibraryPage />} />
              <Route path="/devotional/:id" element={<DevotionalDetailPage />} />
              <Route path="/devotional-reader/:journeyId/:dayNumber" element={<DevotionalReaderPage />} />
              
              {/* Protected Routes */}
              <Route path="/dashboard" element={<ProtectedRoute><UserDashboard /></ProtectedRoute>} />
              <Route path="/enhanced-dashboard" element={<ProtectedRoute><EnhancedDashboard /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><UserProfilePage /></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><NotificationSettings /></ProtectedRoute>} />
              <Route path="/settings/notifications" element={<ProtectedRoute><NotificationSettings /></ProtectedRoute>} />
              <Route path="/saved-verses" element={<ProtectedRoute><SavedVersesPage /></ProtectedRoute>} />
              <Route path="/favorites" element={<ProtectedRoute><MyFavoritesPage /></ProtectedRoute>} />
              <Route path="/my-favorites" element={<ProtectedRoute><MyFavoritesPage /></ProtectedRoute>} />
              <Route path="/library" element={<ProtectedRoute><MyLibrary /></ProtectedRoute>} />
              <Route path="/my-library" element={<ProtectedRoute><MyLibrary /></ProtectedRoute>} />
              
              {/* Fallback */}
              <Route path="*" element={
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-4xl font-serif font-bold text-primary mb-4">Page Not Found</h1>
                  <p className="text-muted-foreground mb-8">The page you are looking for doesn't exist or has been moved.</p>
                  <a href="/" className="text-primary font-medium hover:underline">Return to Home</a>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </AuthProvider>
    </Router>
  );
}

export default App;
