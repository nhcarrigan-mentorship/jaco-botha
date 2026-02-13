export default function Copyright ()
{
    return (
      <footer className="p-6 border-t bg-(--bg-primary)">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <p className="distort-hover text-(--text-secondary) text-xs tracking-widest uppercase">
             2026 206CE <span className="mx-2"> | </span> Operational
            Protocol v1.0
          </p>
          <p className=" distort-hover">
            Unauthorized duplication is a violation of system integrity.
          </p>
        </div>
      </footer>
    );
}