{
    "targets": [
        {
            "target_name": "x11hash",
            "sources": [
                "x11hash.cc",
                "x11.c",
                "x11.h",
                "sha3/aes_helper.c",
                "sha3/blake.c",
                "sha3/bmw.c",
                "sha3/cubehash.c",
                "sha3/echo.c",
                "sha3/groestl.c",
                "sha3/jh.c",
                "sha3/keccak.c",
                "sha3/luffa.c",
                "sha3/shavite.c",
                "sha3/simd.c",
                "sha3/skein.c",
                "x11-call.js"
            ],
            "include_dirs" : [
                "<!(node -e \"require('nan')\")"
            ]
        }
    ]
}
