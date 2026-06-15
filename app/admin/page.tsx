'use client';

import { useState } from 'react';

const ADMIN_PASSWORD = 'Alexandria9613#';

export default function AdminPage() {
  const [password, setPassword] = useState<string>('');
  const [authenticated, setAuthenticated] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('');
  const [uploadedUrl, setUploadedUrl] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setStatus('Please choose a file first.');
      return;
    }

    setStatus('Uploading...');
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (!response.ok) {
        setStatus(data.error || 'Upload failed.');
        setUploadedUrl('');
        return;
      }

      setStatus('Upload successful!');
      setUploadedUrl(data.url);
    } catch (error) {
      setStatus('Upload failed.');
      setUploadedUrl('');
    }
  };

  return (
    <main className="min-h-screen bg-[#111738] text-white">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-soft backdrop-blur-lg">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Admin Upload</p>
              <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Upload site assets</h1>
              <p className="mt-4 text-base leading-7 text-white/70">
                Enter the admin password to upload images directly to <code className="rounded bg-[#111738]/70 px-2 py-1 text-sm text-white/80">public/images</code>.
              </p>
            </div>
            {!authenticated ? (
              <form className="space-y-6" onSubmit={(event) => {
                event.preventDefault();
                setAuthenticated(password === ADMIN_PASSWORD);
                setStatus(password === ADMIN_PASSWORD ? 'Access granted.' : 'Incorrect password.');
              }}>
                <label className="block text-sm font-semibold text-white">
                  Admin password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="mt-3 w-full rounded-[1.5rem] border border-white/10 bg-[#111738] px-4 py-3 text-white outline-none"
                    placeholder="Enter password"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]"
                >
                  Unlock Upload
                </button>
              </form>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <label className="block text-sm font-semibold text-white">
                  Choose an image
                  <input
                    type="file"
                    accept="image/*"
                    className="mt-3 w-full rounded-[1.5rem] border border-white/10 bg-[#111738] px-4 py-3 text-white outline-none"
                    onChange={(event) => setFile(event.target.files?.[0] ?? null)}
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[#111738] transition hover:bg-[#c29f2b]"
                >
                  Upload Image
                </button>
              </form>
            )}

            {status && <p className="text-sm text-white/75">{status}</p>}
            {authenticated && uploadedUrl && (
              <div className="rounded-[1.5rem] bg-[#111738]/80 p-4 text-sm text-white/70">
                Image uploaded to <code className="break-all text-white">{uploadedUrl}</code>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
