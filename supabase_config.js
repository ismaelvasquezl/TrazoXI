/* ============================================================
   TrazoXI · Configuración de Supabase para el Fútbol Formativo
   ------------------------------------------------------------
   Rellena las 2 líneas con los datos de TU proyecto:
     Supabase -> Project Settings -> Data API (o API)
       url      = "Project URL"        (https://xxxxx.supabase.co)
       anonKey  = "anon public" key    (NO uses la service_role)
   La anon key es pública por diseño y es segura en el navegador
   porque las tablas tienen RLS (solo usuarios autenticados).
   Pon enabled:false si algún día quieres volver al modo local.
   ============================================================ */
window.TRAZO_SUPABASE = {
  url: "https://kkhnjjouhcwkhjryxhuj.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtraG5qam91aGN3a2hqcnl4aHVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0Mjg0ODcsImV4cCI6MjEwODAwNDQ4N30.5_nr4NmHtiuhbF5S9brtMV8dJhphy8Kk3N3oQ_YhiLA",
  enabled: true
};
