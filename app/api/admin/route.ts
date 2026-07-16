import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

const ADMIN_PASSWORD = '1234';

function checkAuth(req: NextRequest) {
  const auth = req.headers.get('x-admin-password');
  return auth === ADMIN_PASSWORD;
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: '인증 실패' }, { status: 401 });
  }

  const { data, error } = await supabaseAdmin
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: '데이터 조회 실패' }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PATCH(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: '인증 실패' }, { status: 401 });
  }

  const body = await req.json();
  const { id, is_read } = body;

  const { error } = await supabaseAdmin
    .from('inquiries')
    .update({ is_read })
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: '업데이트 실패' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) {
    return NextResponse.json({ error: '인증 실패' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'ID가 필요합니다.' }, { status: 400 });
  }

  const { error } = await supabaseAdmin
    .from('inquiries')
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: '삭제 실패' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
