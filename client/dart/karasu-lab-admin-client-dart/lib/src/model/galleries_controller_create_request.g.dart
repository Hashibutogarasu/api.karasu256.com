// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'galleries_controller_create_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$GalleriesControllerCreateRequest
    extends GalleriesControllerCreateRequest {
  @override
  final String url;
  @override
  final String alt;
  @override
  final String? key;
  @override
  final String? character;

  factory _$GalleriesControllerCreateRequest(
          [void Function(GalleriesControllerCreateRequestBuilder)? updates]) =>
      (new GalleriesControllerCreateRequestBuilder()..update(updates))._build();

  _$GalleriesControllerCreateRequest._(
      {required this.url, required this.alt, this.key, this.character})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        url, r'GalleriesControllerCreateRequest', 'url');
    BuiltValueNullFieldError.checkNotNull(
        alt, r'GalleriesControllerCreateRequest', 'alt');
  }

  @override
  GalleriesControllerCreateRequest rebuild(
          void Function(GalleriesControllerCreateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  GalleriesControllerCreateRequestBuilder toBuilder() =>
      new GalleriesControllerCreateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is GalleriesControllerCreateRequest &&
        url == other.url &&
        alt == other.alt &&
        key == other.key &&
        character == other.character;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, url.hashCode);
    _$hash = $jc(_$hash, alt.hashCode);
    _$hash = $jc(_$hash, key.hashCode);
    _$hash = $jc(_$hash, character.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'GalleriesControllerCreateRequest')
          ..add('url', url)
          ..add('alt', alt)
          ..add('key', key)
          ..add('character', character))
        .toString();
  }
}

class GalleriesControllerCreateRequestBuilder
    implements
        Builder<GalleriesControllerCreateRequest,
            GalleriesControllerCreateRequestBuilder> {
  _$GalleriesControllerCreateRequest? _$v;

  String? _url;
  String? get url => _$this._url;
  set url(String? url) => _$this._url = url;

  String? _alt;
  String? get alt => _$this._alt;
  set alt(String? alt) => _$this._alt = alt;

  String? _key;
  String? get key => _$this._key;
  set key(String? key) => _$this._key = key;

  String? _character;
  String? get character => _$this._character;
  set character(String? character) => _$this._character = character;

  GalleriesControllerCreateRequestBuilder() {
    GalleriesControllerCreateRequest._defaults(this);
  }

  GalleriesControllerCreateRequestBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _url = $v.url;
      _alt = $v.alt;
      _key = $v.key;
      _character = $v.character;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(GalleriesControllerCreateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$GalleriesControllerCreateRequest;
  }

  @override
  void update(void Function(GalleriesControllerCreateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  GalleriesControllerCreateRequest build() => _build();

  _$GalleriesControllerCreateRequest _build() {
    final _$result = _$v ??
        new _$GalleriesControllerCreateRequest._(
            url: BuiltValueNullFieldError.checkNotNull(
                url, r'GalleriesControllerCreateRequest', 'url'),
            alt: BuiltValueNullFieldError.checkNotNull(
                alt, r'GalleriesControllerCreateRequest', 'alt'),
            key: key,
            character: character);
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
