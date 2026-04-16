import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, service, date, email, message } = body;

    if (!name || !phone || !message) {
      return NextResponse.json({ error: '필수 항목을 입력해주세요.' }, { status: 400 });
    }

    const { error } = await supabase
      .from('inquiries')
      .insert({
        name,
        phone,
        service: service || null,
        wedding_date: date || null,
        email: email || null,
        message,
      });

    if (error) {
      console.error('Supabase insert error:', error);
      return NextResponse.json({ error: '문의 접수에 실패했습니다.' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: '서버 오류가 발생했습니다.' }, { status: 500 });
  }
}
