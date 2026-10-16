#
# x86_64/Haiku configuration
#
host_cpu=x86_64
host_os=haiku
with_threads=unix-pthreads

ac_cv_typedef_int8=yes
ac_cv_typedef_uint8=yes
ac_cv_typedef_int16=yes
ac_cv_typedef_uint16=yes
ac_cv_typedef_int32=yes
ac_cv_typedef_uint32=yes
ac_cv_typedef_int64=yes
ac_cv_typedef_uint64=yes
ac_cv_typedef_bool=yes

# Haiku is BeOS-compatible: use the native BeOS AWT.
KAFFE_CFLAGS="$KAFFE_CFLAGS -m64"
