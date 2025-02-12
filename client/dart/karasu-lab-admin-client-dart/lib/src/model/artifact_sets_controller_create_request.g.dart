// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'artifact_sets_controller_create_request.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$ArtifactSetsControllerCreateRequest
    extends ArtifactSetsControllerCreateRequest {
  @override
  final String url;
  @override
  final String alt;
  @override
  final String key;
  @override
  final String character;

  factory _$ArtifactSetsControllerCreateRequest(
          [void Function(ArtifactSetsControllerCreateRequestBuilder)?
              updates]) =>
      (new ArtifactSetsControllerCreateRequestBuilder()..update(updates))
          ._build();

  _$ArtifactSetsControllerCreateRequest._(
      {required this.url,
      required this.alt,
      required this.key,
      required this.character})
      : super._() {
    BuiltValueNullFieldError.checkNotNull(
        url, r'ArtifactSetsControllerCreateRequest', 'url');
    BuiltValueNullFieldError.checkNotNull(
        alt, r'ArtifactSetsControllerCreateRequest', 'alt');
    BuiltValueNullFieldError.checkNotNull(
        key, r'ArtifactSetsControllerCreateRequest', 'key');
    BuiltValueNullFieldError.checkNotNull(
        character, r'ArtifactSetsControllerCreateRequest', 'character');
  }

  @override
  ArtifactSetsControllerCreateRequest rebuild(
          void Function(ArtifactSetsControllerCreateRequestBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  ArtifactSetsControllerCreateRequestBuilder toBuilder() =>
      new ArtifactSetsControllerCreateRequestBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is ArtifactSetsControllerCreateRequest &&
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
    return (newBuiltValueToStringHelper(r'ArtifactSetsControllerCreateRequest')
          ..add('url', url)
          ..add('alt', alt)
          ..add('key', key)
          ..add('character', character))
        .toString();
  }
}

class ArtifactSetsControllerCreateRequestBuilder
    implements
        Builder<ArtifactSetsControllerCreateRequest,
            ArtifactSetsControllerCreateRequestBuilder> {
  _$ArtifactSetsControllerCreateRequest? _$v;

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

  ArtifactSetsControllerCreateRequestBuilder() {
    ArtifactSetsControllerCreateRequest._defaults(this);
  }

  ArtifactSetsControllerCreateRequestBuilder get _$this {
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
  void replace(ArtifactSetsControllerCreateRequest other) {
    ArgumentError.checkNotNull(other, 'other');
    _$v = other as _$ArtifactSetsControllerCreateRequest;
  }

  @override
  void update(
      void Function(ArtifactSetsControllerCreateRequestBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  ArtifactSetsControllerCreateRequest build() => _build();

  _$ArtifactSetsControllerCreateRequest _build() {
    final _$result = _$v ??
        new _$ArtifactSetsControllerCreateRequest._(
            url: BuiltValueNullFieldError.checkNotNull(
                url, r'ArtifactSetsControllerCreateRequest', 'url'),
            alt: BuiltValueNullFieldError.checkNotNull(
                alt, r'ArtifactSetsControllerCreateRequest', 'alt'),
            key: BuiltValueNullFieldError.checkNotNull(
                key, r'ArtifactSetsControllerCreateRequest', 'key'),
            character: BuiltValueNullFieldError.checkNotNull(character,
                r'ArtifactSetsControllerCreateRequest', 'character'));
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
