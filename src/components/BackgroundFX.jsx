export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="stars-layer" />
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full blur-3xl opacity-30 animate-[float1_20s_ease-in-out_infinite]" style={{ background: 'var(--acc1)' }} />
      <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full blur-3xl opacity-25 animate-[float2_26s_ease-in-out_infinite]" style={{ background: 'var(--acc3)' }} />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full blur-3xl opacity-20 animate-[float3_32s_ease-in-out_infinite]" style={{ background: 'var(--acc2)' }} />
      <div className="absolute top-10 right-1/3 h-60 w-60 rounded-full blur-3xl opacity-15 animate-[float4_28s_ease-in-out_infinite]" style={{ background: 'var(--acc3)' }} />
      <div className="twinkle-layer" />
    </div>
  );
}

